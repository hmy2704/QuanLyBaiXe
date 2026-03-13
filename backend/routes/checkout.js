const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

// 1. API Tìm kiếm thông tin xe để hiện lên Form
router.get('/xera/:maVe', async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('maVe', sql.Int, req.params.maVe)
            .query(`
                SELECT TOP 1 
                    L.LuotGuild, 
                    L.BienSo, 
                    L.ThoiGianVao,
                    L.LoaiXe
                FROM LuotGui L
                WHERE L.VeGuiId = @maVe AND L.ThoiGianRa IS NULL
                ORDER BY L.ThoiGianVao DESC
            `);

        if (result.recordset.length === 0) {
            return res.status(404).json({ message: "Không tìm thấy xe gắn với vé này!" });
        }
        res.json(result.recordset[0]);
    } catch (err) {
        res.status(500).json({ message: "Lỗi tìm kiếm", error: err.message });
    }
});

// 2. API Ghi nhận xe ra (Cập nhật tiền và trạng thái vé)
router.post('/checkout', async (req, res) => {
    try {
        const { VeGuiId, phiGui } = req.body; 
        let pool = await sql.connect(config);

        // Tìm lượt gửi chưa trả xe
        let result = await pool.request()
            .input('veId', sql.Int, VeGuiId)
            .query(`
                SELECT TOP 1 LuotGuild FROM LuotGui 
                WHERE VeGuiId = @veId AND ThoiGianRa IS NULL 
                ORDER BY ThoiGianVao DESC
            `);

        if (result.recordset.length === 0) {
            return res.status(400).json({ message: "Vé này hiện không có xe trong bãi!" });
        }

        const luotId = result.recordset[0].LuotGuild;

        // Cập nhật Database
        await pool.request()
            .input('luotId', sql.Int, luotId)
            .input('phi', sql.Decimal(18, 2), phiGui || 0) 
            .input('veId', sql.Int, VeGuiId)
            .query(`
                UPDATE LuotGui 
                SET ThoiGianRa = GETDATE(), PhiGui = @phi 
                WHERE LuotGuild = @luotId;

                UPDATE VeGui SET TrangThaiId = 1 WHERE VeGuiId = @veId;
            `);

        res.json({ status: "OK", message: "Ghi nhận xe ra thành công!" });
    } catch (err) {
        res.status(500).json({ message: "Lỗi hệ thống", error: err.message });
    }
});

module.exports = router;