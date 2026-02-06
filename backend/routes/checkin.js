const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkin', async (req, res) => {
    try {
        // Postman gửi lên key gì thì phải lấy đúng key đó ở đây
        const { VeGuiId, BienSo, MauXe } = req.body;

        let pool = await sql.connect(config);

        // BƯỚC 1: Tìm vé dựa trên VeGuiId mà bạn gửi từ Postman
        let veCheck = await pool.request()
            .input('veld', sql.Int, VeGuiId) // Sử dụng đúng biến VeGuiId đã lấy ở trên
            .query("SELECT VeXeId FROM VeXe WHERE VeXeld = @veId AND TrangThai = N'Trống'");

        if (veCheck.recordset.length === 0) {
            return res.status(400).json({ message: "Vé không tồn tại hoặc đã có xe dùng!" });
        }

        const vId = veCheck.recordset[0].VeXeld;

        // BƯỚC 2: INSERT & UPDATE
        await pool.request()
            .input('vld', sql.Int, vId)
            .input('bs', sql.VarChar, BienSo)
            .input('mx', sql.NVarChar, MauXe)
            .query(`
                IF NOT EXISTS (SELECT 1 FROM Xe WHERE BienSo = @bs)
                    INSERT INTO Xe (BienSo, LoaiXeId) VALUES (@bs, 1);

                DECLARE @CurrentXeId INT = (SELECT XeId FROM Xe WHERE BienSo = @bs);

                INSERT INTO LuotGui (VeXeld, ThoiGianVao, MauXe, TrangThaiThanhToan, XeId) 
                VALUES (@vId, GETDATE(), @mx, 0, @CurrentXeld);

                UPDATE VeXe SET TrangThai = N'Đang sử dụng' WHERE VeXeld = @vId;
            `);

        res.status(200).json({ status: "OK", message: "Xe vào thành công!" });

    } catch (err) {
        console.error("Lỗi chi tiết:", err.message);
        res.status(500).json({ message: "Lỗi hệ thống", error: err.message });
    }
});

module.exports = router;