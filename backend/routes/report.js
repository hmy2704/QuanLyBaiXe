const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.get('/report/all', async (req, res) => {

    try {

        const pool = await sql.connect(config);

        // =========================
        // 1 THỐNG KÊ
        // =========================
        const stats = await pool.request().query(`
            SELECT 
                COUNT(CASE 
                    WHEN CAST(ThoiGianRa AS DATE) = CAST(GETDATE() AS DATE)
                    THEN 1 END) AS XeRaHomNay,

                ISNULL(SUM(CASE 
                    WHEN CAST(ThoiGianRa AS DATE) = CAST(GETDATE() AS DATE)
                    THEN PhiGui END),0) AS DoanhThuHomNay,

                ISNULL(SUM(CASE 
                    WHEN ThoiGianRa >= DATEADD(DAY,-7,GETDATE())
                    THEN PhiGui END),0) AS DoanhThuTuan,

                ISNULL(SUM(CASE 
                    WHEN MONTH(ThoiGianRa)=MONTH(GETDATE())
                    AND YEAR(ThoiGianRa)=YEAR(GETDATE())
                    THEN PhiGui END),0) AS DoanhThuThang

            FROM LuotGui
        `);


        // =========================
        // 2 DANH SÁCH BÁO CÁO
        // =========================
        const report = await pool.request().query(`
            SELECT
                ISNULL(RTRIM(SoCuoi),'Không rõ') AS BienSo,
                ISNULL(LoaiXe,'Xe máy') AS LoaiXe,
                ThoiGianVao,
                ThoiGianRa,
                ISNULL(PhiGui,0) AS TongTien
            FROM LuotGui
            ORDER BY ThoiGianVao DESC
        `);


        // =========================
        // 3 XE TRONG BÃI
        // =========================
        const xeTrongBai = await pool.request().query(`
            SELECT COUNT(*) AS SoXe
            FROM LuotGui
            WHERE ThoiGianRa IS NULL
        `);


        res.json({

            status: "OK",

            NgayCapNhat: new Date().toLocaleString('vi-VN'),

            ThongKe: stats.recordset[0],

            SoLuongXeTrongBai: xeTrongBai.recordset[0].SoXe,

            DanhSachBaoCao: report.recordset

        });

    } catch (err) {

        console.error("Lỗi report:", err);

        res.status(500).json({
            message: "Không lấy được báo cáo",
            error: err.message
        });

    }

});

module.exports = router;