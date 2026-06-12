const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkin', async (req, res) => {
    try {
        const { bienSo, loaiXe, maVeQuet } = req.body;
        let pool = await sql.connect(config);

        // 1. KIỂM TRA XE ĐÃ CÓ TRONG BÃI CHƯA
        let checkXe = await pool.request()
            .input('sc_check', sql.VarChar, bienSo)
            .query("SELECT LuotGuiId FROM LuotGui WHERE SoCuoi = @sc_check AND ThoiGianRa IS NULL");

        if (checkXe.recordset.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Cảnh báo: Xe ${bienSo} đang ở trong bãi rồi!`
            });
        }

        let finalMaVe = "";
        let finalVeXeId = null;

        // 2. PHÂN LOẠI: VÉ THÁNG HAY VÃNG LAI
        if (maVeQuet && maVeQuet.trim() !== "") {
            // --- TRƯỜNG HỢP VÉ THÁNG ---
            let checkVT = await pool.request()
                .input('mv', sql.VarChar, maVeQuet)
                .query(`SELECT * FROM VeThang 
                        WHERE MaVe = @mv AND NgayHetHan > GETDATE() AND TrangThai = N'Hoạt động'`);

            if (checkVT.recordset.length === 0) {
                return res.status(400).json({ success: false, message: "Thẻ vé tháng không tồn tại hoặc đã hết hạn!" });
            }

            const thongTinVeThang = checkVT.recordset[0];

            if (thongTinVeThang.BienSo.trim() !== bienSo.trim()) {
                return res.status(400).json({
                    success: false,
                    message: `Thẻ này cấp cho xe ${thongTinVeThang.BienSo}, không khớp với xe đang đứng cổng (${bienSo})!`
                });
            }

            finalMaVe = thongTinVeThang.MaVe;
            finalVeXeId = null;
        } else {
            // --- TRƯỜNG HỢP VÃNG LAI ---
            let veTrong = await pool.request()
                .query("SELECT TOP 1 VeXeId, MaVe FROM VeXe WHERE TrangThai = N'TRỐNG'");

            if (veTrong.recordset.length === 0) {
                return res.status(400).json({ success: false, message: "Hết chỗ/Hết vé vãng lai trống!" });
            }

            finalVeXeId = veTrong.recordset[0].VeXeId;
            finalMaVe = veTrong.recordset[0].MaVe;

            await pool.request()
                .input('vId', sql.Int, finalVeXeId)
                .query("UPDATE VeXe SET TrangThai = N'Đang sử dụng' WHERE VeXeId = @vId");
        }

        // BỔ SUNG: XỬ LÝ BẢNG XE ĐỂ LẤY XEID (Giúp hiển thị MaQR sau này)
        let finalXeId = null;
        let getXeId = await pool.request()
            .input('bs', sql.VarChar, bienSo)
            .query("SELECT XeId FROM Xe WHERE BienSo = @bs");

        if (getXeId.recordset.length > 0) {
            finalXeId = getXeId.recordset[0].XeId;
        } else {
            // Nếu xe vãng lai mới tinh chưa từng vào bãi, tự tạo một dòng trong bảng Xe
            let insertXe = await pool.request()
                .input('bs', sql.VarChar, bienSo)
                .input('mx', sql.NVarChar, loaiXe)
                .input('mqr', sql.NVarChar, finalMaVe) // Gán tạm mã thẻ làm mã QR cho xe vãng lai
                .query(`
                    INSERT INTO Xe (BienSo, MauXe, LoaiXeId, MaQR) 
                    OUTPUT INSERTED.XeId
                    VALUES (@bs, @mx, 1, @mqr)
                `);
            finalXeId = insertXe.recordset[0].XeId;
        }

        // 3. GHI NHẬT KÝ VÀO BẢNG LUOTGUI (Đã bổ sung XeId)
        await pool.request()
            .input('vId', sql.Int, finalVeXeId)
            .input('xId', sql.Int, finalXeId)
            .input('sc', sql.VarChar, bienSo)
            .input('lx', sql.NVarChar, loaiXe)
            .query(`
                INSERT INTO LuotGui (VeXeId, XeId, SoCuoi, MauXe, ThoiGianVao, TrangThaiThanhToan) 
                VALUES (@vId, @xId, @sc, @lx, GETDATE(), 0)
            `);

        // TRẢ VỀ THÊM MA_VE ĐỂ FRONTEND IN RA MÀN HÌNH
        res.json({
            success: true,
            maVe: finalMaVe,
            loaiKhach: finalVeXeId ? "Vãng lai" : "Vé tháng",
            message: "Ghi nhận xe vào thành công!"
        });

    } catch (err) {
        console.error("Lỗi tại Server:", err.message);
        res.status(500).json({ success: false, message: "Lỗi hệ thống: " + err.message });
    }
});

module.exports = router;