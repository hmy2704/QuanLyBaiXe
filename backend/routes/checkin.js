const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkin', async (req, res) => {
    try {
        const { bienSo, loaiXe } = req.body;
        let pool = await sql.connect(config);

        // 1. KIỂM TRA TRÙNG BIỂN SỐ: Check xem xe này đã có trong bãi chưa
        // Tìm những xe có biển số này mà chưa có ThoiGianRa
        let checkXe = await pool.request()
            .input('sc_check', sql.VarChar, bienSo)
            .query("SELECT LuotGuiId FROM LuotGui WHERE SoCuoi = @sc_check AND ThoiGianRa IS NULL");

        if (checkXe.recordset.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Xe ${bienSo} hiện đang ở trong bãi, không thể tạo thêm lượt vào!`
            });
        }

        // 2. LẤY MÃ VÉ TRỐNG
        let ve = await pool.request()
            .query("SELECT TOP 1 VeXeId, MaVe FROM VeXe WHERE TrangThai = N'TRỐNG'");

        if (ve.recordset.length === 0) {
            return res.status(400).json({ success: false, message: "Hết vé trống!" });
        }

        const { VeXeId, MaVe } = ve.recordset[0];

        // 3. GHI LƯỢT GỬI VÀ CẬP NHẬT TRẠNG THÁI VÉ
        await pool.request()
            .input('vId', sql.Int, VeXeId)
            .input('sc', sql.VarChar, bienSo)
            .input('lx', sql.NVarChar, loaiXe)
            .query(`
                INSERT INTO LuotGui (VeXeId, SoCuoi, MauXe, ThoiGianVao, TrangThaiThanhToan) 
                VALUES (@vId, @sc, @lx, GETDATE(), 0);
                
                UPDATE VeXe SET TrangThai = N'Đang sử dụng' WHERE VeXeId = @vId;
            `);

        // Trả về thành công kèm mã vé để Web hiện mã QR
        res.json({ success: true, maVe: MaVe });

    } catch (err) {
        console.error("Lỗi tại Server:", err.message);
        res.status(500).json({ success: false, message: "Lỗi SQL: " + err.message });
    }
});

module.exports = router;