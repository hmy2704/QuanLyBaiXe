const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../dbConfig');

// API lấy báo cáo tổng quan trong ngày
router.get('/report/today', async (req, res) => {
    try {
        let pool = await sql.connect(config);
        
        // Truy vấn tính tổng doanh thu và lượt xe đã ra trong hôm nay
        let result = await pool.request().query(`
            SELECT 
                COUNT(*) as TongLuotXe, 
                SUM(PhiGui) as TongDoanhThu 
            FROM LuotGui 
            WHERE KetQua = N'Đã ra' 
            AND CAST(ThoiGianGui AS DATE) = CAST(GETDATE() AS DATE)
        `);

        // Truy vấn danh sách xe đang còn trong bãi để đối soát
        let xeTrongBai = await pool.request().query(`
            SELECT L.LuotGuiId, V.MaVe, L.ThoiGianGui
            FROM LuotGui L
            JOIN VeGui V ON L.VeGuiId = V.VeGuiId
            WHERE L.KetQua = N'Xe đã vào'
        `);

        res.json({
            ngay: new Date().toLocaleDateString('vi-VN'),
            thongKeChung: result.recordset[0],
            danhSachXeTrongBai: xeTrongBai.recordset
        });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;