const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkin', async (req, res) => {
    try {
        const { maVe, bienSo, loaiXe } = req.body;
        let pool = await sql.connect(config);

        // 1. Kiểm tra trạng thái vé trong bảng VeGui
        // Tôi giả định bảng VeGui cũng dùng tên cột là VeGuiId và TrangThaiId
        let veCheck = await pool.request()
            .input('vIdInput', sql.Int, maVe)
            .query(`
                SELECT VeGuiId 
                FROM VeGui 
                WHERE VeGuiId = @vIdInput AND TrangThaiId = 1
            `);

        if (veCheck.recordset.length === 0) {
            return res.status(400).json({
                message: "Vé số " + maVe + " không sẵn sàng hoặc không tồn tại!"
            });
        }

        const vId = veCheck.recordset[0].VeGuiId;

        // 2. Chèn vào bảng LuotGui với đúng tên cột trong hình Design của bạn
        // Cột bạn chụp là: LuotGuild, ThoiGianVao, Xeld, VeXeld
        await pool.request()
            .input('vId', sql.Int, vId)
            .input('xId', sql.Int, 1) // Tạm thời dùng XeId = 1
            .query(`
                INSERT INTO LuotGui
                (VeXeld, Xeld, ThoiGianVao)
                VALUES
                (@vId, @xId, GETDATE());

                UPDATE VeGui
                SET TrangThaiId = 2
                WHERE VeGuiId = @vId;
            `);

        res.json({ message: "Xe vào thành công!" });

    } catch (err) {
        console.error("LỖI SQL:", err.message);
        res.status(500).json({
            message: "Lỗi hệ thống",
            detail: err.message
        });
    }
});

module.exports = router;