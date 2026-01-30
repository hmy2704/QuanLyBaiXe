const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.get('/report/all', async (req, res) => {
    try {
        let pool = await sql.connect(config);

        // 1. Thống kê chung (Ngày, Tuần, Tháng)
        let statsResult = await pool.request().query(`
            SELECT 
                -- Hôm nay
                COUNT(CASE WHEN CAST(ThoiGianRa AS DATE) = CAST(GETDATE() AS DATE) THEN 1 END) AS XeRaHomNay,
                ISNULL(SUM(CASE WHEN CAST(ThoiGianRa AS DATE) = CAST(GETDATE() AS DATE) THEN PhiGui ELSE 0 END), 0) AS DoanhThuHomNay,
                
                -- Tuần này (7 ngày gần nhất)
                ISNULL(SUM(CASE WHEN ThoiGianRa >= DATEADD(day, -7, GETDATE()) THEN PhiGui ELSE 0 END), 0) AS DoanhThuTuan,
                
                -- Tháng này
                ISNULL(SUM(CASE WHEN MONTH(ThoiGianRa) = MONTH(GETDATE()) AND YEAR(ThoiGianRa) = YEAR(GETDATE()) THEN PhiGui ELSE 0 END), 0) AS DoanhThuThang
            FROM LuotGui 
            WHERE ThoiGianRa IS NOT NULL
        `);

        // 2. Danh sách xe đang trong bãi (Chưa checkout)
        let xeTrongBai = await pool.request().query(`
            SELECT L.LuotGuiId, V.MaVe, X.BienSo, L.MauXe, L.ThoiGianVao
            FROM LuotGui L
            JOIN VeXe V ON L.VeXeId = V.VeXeId
            JOIN Xe X ON L.XeId = X.XeId
            WHERE L.ThoiGianRa IS NULL
            ORDER BY L.ThoiGianVao DESC
        `);

        res.json({
            status: "OK",
            NgayCapNhat: new Date().toLocaleString('vi-VN'),
            ThongKeDoanhThu: statsResult.recordset[0],
            SoLuongXeTrongBai: xeTrongBai.recordset.length,
            DanhSachXeTrongBai: xeTrongBai.recordset
        });

    } catch (err) {
        console.error("Lỗi báo cáo:", err.message);
        res.status(500).json({ message: "Lỗi khi lấy báo cáo", error: err.message });
    }
});

module.exports = router;