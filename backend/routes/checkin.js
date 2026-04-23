const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkin', async (req, res) => {
    try {
        const { bienSo, loaiXe, maVeQuet } = req.body; // maVeQuet từ ô nhập mã thẻ trên giao diện
        let pool = await sql.connect(config);

        // 1. KIỂM TRA XE ĐÃ CÓ TRONG BÃI CHƯA (Chống trùng cho cả vé tháng và vãng lai)
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

            // So khớp biển số xe đang quét với biển số đăng ký trên thẻ
            if (thongTinVeThang.BienSo !== bienSo) {
                return res.status(400).json({
                    success: false,
                    message: `Thẻ này cấp cho xe ${thongTinVeThang.BienSo}, không khớp với xe đang đứng cổng (${bienSo})!`
                });
            }

            finalMaVe = thongTinVeThang.MaVe;
            finalVeXeId = null; // Vé tháng có thể không cần ID từ bảng VeXe vãng lai
        } else {
            // --- TRƯỜNG HỢP VÃNG LAI (Không quẹt thẻ) ---
            let veTrong = await pool.request()
                .query("SELECT TOP 1 VeXeId, MaVe FROM VeXe WHERE TrangThai = N'TRỐNG'");

            if (veTrong.recordset.length === 0) {
                return res.status(400).json({ success: false, message: "Hết chỗ/Hết vé vãng lai trống!" });
            }

            finalVeXeId = veTrong.recordset[0].VeXeId;
            finalMaVe = veTrong.recordset[0].MaVe;

            // Cập nhật trạng thái vé vãng lai thành 'Đang sử dụng'
            await pool.request()
                .input('vId', sql.Int, finalVeXeId)
                .query("UPDATE VeXe SET TrangThai = N'Đang sử dụng' WHERE VeXeId = @vId");
        }

        // 3. GHI NHẬT KÝ VÀO BẢNG LUOTGUI
        // Lưu ý: Nếu là vé tháng, VeXeId sẽ là NULL (hoặc My có thể để một ID mặc định)
        await pool.request()
            .input('vId', sql.Int, finalVeXeId)
            .input('sc', sql.VarChar, bienSo)
            .input('lx', sql.NVarChar, loaiXe)
            .query(`
                INSERT INTO LuotGui (VeXeId, SoCuoi, MauXe, ThoiGianVao, TrangThaiThanhToan) 
                VALUES (@vId, @sc, @lx, GETDATE(), 0)
            `);

        res.json({
            success: true,
            maVe: finalMaVe,
            loaiKhach: finalVeXeId ? "Vãng lai" : "Vé tháng"
        });

    } catch (err) {
        console.error("Lỗi tại Server:", err.message);
        res.status(500).json({ success: false, message: "Lỗi hệ thống: " + err.message });
    }
});

module.exports = router;