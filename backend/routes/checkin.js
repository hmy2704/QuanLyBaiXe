const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkin', async (req, res) => {
    try {
        const { bienSo, mauXe } = req.body;
        let pool = await sql.connect(config);

        // 1. Lấy vé trống
        let veCheck = await pool.request()
            .query("SELECT TOP 1 VeXeId FROM VeXe WHERE TrangThai = N'Trống'");

        if (veCheck.recordset.length === 0) {
            return res.status(400).json({ message: "Hiện tại không còn vé trống!" });
        }
        const vId = veCheck.recordset[0].VeXeId;

        // 2. Xử lý xe
        let xeCheck = await pool.request()
            .input('bs', sql.VarChar, bienSo)
            .query("SELECT XeId FROM Xe WHERE BienSo = @bs");

        let xeId;
        if (xeCheck.recordset.length === 0) {
            let newXe = await pool.request()
                .input('bs', sql.VarChar, bienSo)
                .input('mx', sql.NVarChar, mauXe)
                .query("INSERT INTO Xe (BienSo, MauXe, LoaiXeId) OUTPUT INSERTED.XeId VALUES (@bs, @mx, 1)");
            xeId = newXe.recordset[0].XeId;
        } else {
            xeId = xeCheck.recordset[0].XeId;
        }

        // 3. Ghi dữ liệu
        await pool.request()
            .input('vId', sql.Int, vId)
            .input('xId', sql.Int, xeId)
            .input('mx', sql.NVarChar, mauXe)
            .query(`
                INSERT INTO LuotGui (VeXeId, XeId, MauXe, ThoiGianVao, TrangThaiThanhToan)
                VALUES (@vId, @xId, @mx, GETDATE(), 0);
                UPDATE VeXe SET TrangThai = N'Đang sử dụng' WHERE VeXeId = @vId;
            `);

        res.json({ message: "Thành công" });
    } catch (err) {
        res.status(500).json({ message: "Lỗi hệ thống", detail: err.message });
    }
});


module.exports = router;