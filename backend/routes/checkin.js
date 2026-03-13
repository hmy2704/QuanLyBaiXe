const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkin', async (req, res) => {

    try {

        const { maVe, bienSo, loaiXe } = req.body;

        let pool = await sql.connect(config);

        let veCheck = await pool.request()
            .input('vIdInput', sql.Int, maVe)
            .query(`
                SELECT VeGuiId 
                FROM VeGui 
                WHERE VeGuiId = @vIdInput AND TrangThaiId = 1
            `);

        if (veCheck.recordset.length === 0) {
            return res.status(400).json({
                message: "Vé số " + maVe + " không sẵn sàng!"
            });
        }

        const vId = veCheck.recordset[0].VeGuiId;

        await pool.request()
            .input('vId', sql.Int, vId)
            .input('bs', sql.VarChar, bienSo)
            .input('mx', sql.NVarChar, loaiXe)
            .query(`
                INSERT INTO LuotGui
                (VeGuiId, BienSo, LoaiXe, ThoiGianVao)
                VALUES
                (@vId, @bs, @mx, GETDATE())

                UPDATE VeGui
                SET TrangThaiId = 2
                WHERE VeGuiId = @vId
            `);

        res.json({ message: "Xe vào thành công!" });

    } catch (err) {

        console.error(err);
        res.status(500).json({
            message: "Lỗi hệ thống",
            detail: err.message
        });

    }

});

module.exports = router;