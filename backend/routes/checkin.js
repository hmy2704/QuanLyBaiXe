const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkin', async (req, res) => {
    try {
        const { soCuoi, loaiXe } = req.body;
        let pool = await sql.connect(config);

        // 1. Lấy mã vé trống
        let ve = await pool.request()
            .query("SELECT TOP 1 VeXeId, MaVe FROM VeXe WHERE TrangThai = N'TRỐNG'");

        if (ve.recordset.length === 0) return res.status(400).json({ message: "Hết vé trống!" });
        const { VeXeId, MaVe } = ve.recordset[0];

        // 2. Ghi lượt gửi vào bảng LuotGui
        await pool.request()
            .input('vId', sql.Int, VeXeId)
            .input('sc', sql.VarChar, soCuoi)
            .input('lx', sql.NVarChar, loaiXe)
            .query(`
                INSERT INTO LuotGui (VeXeId, SoCuoi, LoaiXe, ThoiGianVao, TrangThaiThanhToan) 
                VALUES (@vId, @sc, @lx, GETDATE(), 0);
                
                UPDATE VeXe SET TrangThai = N'Đang sử dụng' WHERE VeXeId = @vId;
            `);

        res.json({ success: true, maVe: MaVe });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;