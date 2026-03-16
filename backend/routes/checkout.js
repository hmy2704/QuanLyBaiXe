const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.get('/xera/:keyword', async (req, res) => {
    try {
        const keyword = req.params.keyword ? req.params.keyword.trim() : "";
        console.log("Đang truy vấn mã vé:", keyword);

        if (!keyword) {
            return res.status(400).json({ message: "Vui lòng cung cấp mã vé!" });
        }

        let pool = await sql.connect(config);

        // ĐÃ LOẠI BỎ HOÀN TOÀN CONCAT - DÙNG CÚ PHÁP SQL CŨ
        let result = await pool.request()
            .input('kw', sql.VarChar, keyword)
            .query(`
                SELECT TOP 1 
                    L.LuotGuiId, 
                    L.VeXeId, 
                    ISNULL(X.BienSo, (N'Số cuối: ' + CAST(ISNULL(L.SoCuoi, '') AS NVARCHAR(50)))) as BienSo, 
                    L.ThoiGianVao, 
                    ISNULL(L.MauXe, X.MauXe) as MauXe, 
                    L.SoCuoi
                FROM LuotGui L
                LEFT JOIN VeXe V ON L.VeXeId = V.VeXeId 
                LEFT JOIN Xe X ON L.XeId = X.XeId
                WHERE V.MaVe = @kw 
                  AND L.ThoiGianRa IS NULL
                ORDER BY L.ThoiGianVao DESC
            `);

        if (result.recordset.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy xe trong bãi!" });
        }

        res.json(result.recordset[0]);
    } catch (err) {
        console.error("Lỗi tại Backend:", err.message);
        res.status(500).json({ message: "Lỗi hệ thống", error: err.message });
    }
});

router.post('/checkout', async (req, res) => {
    try {
        const { VeXeId } = req.body;
        let pool = await sql.connect(config);

        const result = await pool.request()
            .input('veId', sql.Int, VeXeId)
            .query(`
                UPDATE LuotGui 
                SET ThoiGianRa = GETDATE(), 
                    PhiGui = 5000 
                WHERE VeXeId = @veId AND ThoiGianRa IS NULL;

                UPDATE VeXe SET TrangThai = N'Trống' WHERE VeXeId = @veId;
            `);

        res.status(200).json({ message: "Thanh toán thành công!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Lỗi hệ thống", error: err.message });
    }
});

module.exports = router;