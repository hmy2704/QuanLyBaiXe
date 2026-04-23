const express = require('express');
const router = express.Router();

router.get('/all', async (req, res) => {
    try {
        const pool = global.pool;
        if (!pool) throw new Error("Chưa kết nối database");

        // 1. Lấy danh sách lượt gửi
        const queryLuotGui = `
            SELECT SoCuoi AS BienSo, MauXe AS LoaiXe, ThoiGianVao, ThoiGianRa, ISNULL(PhiGui, 0) AS TongTien
            FROM dbo.LuotGui
        `;
        const resultLuotGui = await pool.request().query(queryLuotGui);

        // 2. Đếm số lượng vé tháng đang hoạt động
        const queryVeThang = `SELECT COUNT(*) AS TongVeThang FROM dbo.VeThang WHERE TrangThai = N'Hoạt động'`;
        const resultVeThang = await pool.request().query(queryVeThang);

        res.json({
            DanhSachBaoCao: resultLuotGui.recordset,
            TongVeThang: resultVeThang.recordset[0].TongVeThang // Gửi con số thực tế về
        });

    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});
module.exports = router;