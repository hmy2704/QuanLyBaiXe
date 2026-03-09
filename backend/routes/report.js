const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.get('/report/all', async (req, res) => {
    try {

        let pool = await sql.connect(config);

        // 1. Thống kê
        let statsResult = await pool.request().query(`
            SELECT 
                COUNT(CASE WHEN CAST(ThoiGianRa AS DATE) = CAST(GETDATE() AS DATE) THEN 1 END) AS XeRaHomNay,

                ISNULL(SUM(CASE 
                    WHEN CAST(ThoiGianRa AS DATE) = CAST(GETDATE() AS DATE) 
                    THEN TongTien ELSE 0 END),0) AS DoanhThuHomNay,

                ISNULL(SUM(CASE 
                    WHEN ThoiGianRa >= DATEADD(day,-7,GETDATE()) 
                    THEN TongTien ELSE 0 END),0) AS DoanhThuTuan,

                ISNULL(SUM(CASE 
                    WHEN MONTH(ThoiGianRa)=MONTH(GETDATE()) 
                    AND YEAR(ThoiGianRa)=YEAR(GETDATE()) 
                    THEN TongTien ELSE 0 END),0) AS DoanhThuThang

            FROM LuotGui
            WHERE ThoiGianRa IS NOT NULL
        `);

        // 2. Danh sách lượt gửi (để hiển thị bảng báo cáo)
        let reportList = await pool.request().query(`
            SELECT 
                lg.BienSo,
                lv.TenLoaiVe AS LoaiXe,
                lg.ThoiGianVao,
                lg.ThoiGianRa,
                lg.TongTien
            FROM LuotGui lg
            JOIN VeGui vg ON lg.VeGuiId = vg.VeGuiId
            JOIN LoaiVe lv ON vg.LoaiVeId = lv.LoaiVeId
            ORDER BY lg.ThoiGianVao DESC
        `);

        // 3. Xe đang trong bãi
        let xeTrongBai = await pool.request().query(`
            SELECT COUNT(*) AS SoXe
            FROM LuotGui
            WHERE ThoiGianRa IS NULL
        `);

        res.json({
            status: "OK",
            NgayCapNhat: new Date().toLocaleString('vi-VN'),

            ThongKe: statsResult.recordset[0],

            SoLuongXeTrongBai: xeTrongBai.recordset[0].SoXe,

            DanhSachBaoCao: reportList.recordset
        });

    } catch (err) {

        console.error("Lỗi báo cáo:", err.message);

        res.status(500).json({
            message: "Lấy báo cáo không thành công",
            error: err.message
        });

    }
});

module.exports = router;