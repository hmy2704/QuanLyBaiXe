const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');


// =========================
// LẤY BÁO CÁO
// =========================
router.get('/report/all', async (req, res) => {

    try {

        const pool = await sql.connect(config);

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


// =========================
// CẬP NHẬT DỮ LIỆU
// =========================
router.put('/report/update', async (req, res) => {

    try {

        const { bienSo, loaiXe, gioVao, gioRa, tongTien } = req.body;

        const pool = await sql.connect(config);

                    const now = new Date();
                const nowDate = now.getFullYear() + "-" +
                (String(now.getMonth()+1).padStart(2,"0")) + "-" +
                (String(now.getDate()).padStart(2,"0"));

                const result = await pool.request()
                .input("bienSo", sql.NVarChar, bienSo)
                .input("loaiXe", sql.NVarChar, loaiXe)
                .input("gioVao", sql.DateTime, `${nowDate} ${gioVao}:00`)
                .input("gioRa", sql.DateTime, gioRa ? `${nowDate} ${gioRa}:00` : null)
                .input("tongTien", sql.Int, tongTien)

                .query(`
                UPDATE LuotGui
                SET
                LoaiXe = @loaiXe,
                ThoiGianVao = @gioVao,
                ThoiGianRa = @gioRa,
                PhiGui = @tongTien
                WHERE RTRIM(SoCuoi) = @bienSo
                `);
        

        res.json({
            status: "OK",
            message: "Cập nhật thành công"
        });

    } catch (err) {

        console.error("Lỗi update:", err);

        res.status(500).json({
            message: "Không cập nhật được",
            error: err.message
        });

    }

});

module.exports = router;