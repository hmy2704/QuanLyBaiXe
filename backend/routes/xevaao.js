const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../dbConfig');

router.post('/checkin', async (req, res) => {
    try {
        const { maVe, bienSo, mauXe } = req.body; // Dữ liệu từ Postman
        let pool = await sql.connect(config);

        // Kiểm tra xem vé có tồn tại và đang TRỐNG không
        let veCheck = await pool.request()
            .input('maVe', sql.VarChar, maVe)
            .query('SELECT VeGuiId FROM VeGui WHERE MaVe = @maVe AND TrangThaiId = 1');

        if (veCheck.recordset.length === 0) {
            return res.status(400).json({ message: "Vé không tồn tại hoặc đang được sử dụng!" });
        }

        const veGuiId = veCheck.recordset[0].VeGuiId;

        // Thêm vào lượt gửi và cập nhật trạng thái vé
        await pool.request()
            .input('veId', sql.Int, veGuiId)
            .input('bienSo', sql.VarChar, bienSo)
            .query(`
                INSERT INTO LuotGui (VeGuiId, ThoiGianGui, KetQua) VALUES (@veId, GETDATE(), N'Xe đã vào');
                UPDATE VeGui SET TrangThaiId = 2 WHERE VeGuiId = @veId;
            `);

        res.status(200).json({ status: "OK", message: "Xe vào thành công!", bienSo, thoiGian: new Date() });
    } catch (err) {
        res.status(500).send(err.message);
    }
});
module.exports = router;