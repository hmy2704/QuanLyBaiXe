const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkin', async (req, res) => {
    try {
        const { maVe, bienSo } = req.body; 
        let pool = await sql.connect(config);

        // 1. KIỂM TRA VÀO BẢNG VeGui
        // Theo ảnh của bạn: Bảng VeGui dùng VeGuiId (Chữ I hoa)
        let veCheck = await pool.request()
            .input('vIdInput', sql.Int, maVe)
            .query("SELECT VeGuiId FROM VeGui WHERE VeGuiId = @vIdInput AND TrangThaiId = 1");

        if (veCheck.recordset.length === 0) {
            return res.status(400).json({ message: "Vé số " + maVe + " không sẵn sàng!" });
        }

        const vId = veCheck.recordset[0].VeGuiId;

        // 2. THỰC HIỆN NGHIỆP VỤ TRÊN CÁC BẢNG KHÁC
        // Theo ảnh: Bảng Xe dùng Xeld (l thường), Bảng LuotGui dùng VeXeld (l thường) và ThoiGianVao
        await pool.request()
            .input('vId', sql.Int, vId)
            .input('bs', sql.VarChar, bienSo)
            .query(`
                -- Kiểm tra xe
                IF NOT EXISTS (SELECT 1 FROM Xe WHERE BienSo = @bs)
                    INSERT INTO Xe (BienSo, LoaiXeld) VALUES (@bs, 1);

                DECLARE @CurrentXeld INT = (SELECT Xeld FROM Xe WHERE BienSo = @bs);

                -- Ghi vào LuotGui (Dùng VeXeld theo ảnh cột bảng LuotGui của bạn)
                INSERT INTO LuotGui (VeXeld, ThoiGianVao, Xeld) 
                VALUES (@vId, GETDATE(), @CurrentXeld);

                -- Cập nhật trạng thái vé (Dùng VeGuiId theo ảnh cột bảng VeGui của bạn)
                UPDATE VeGui SET TrangThaiId = 2 WHERE VeGuiId = @vId;
            `);

        res.status(200).json({ status: "OK", message: "Ghi nhận xe " + bienSo + " thành công!" });

    } catch (err) {
        console.log("---------- LỖI SQL CHI TIẾT ----------");
        console.error(err.message); 
        console.log("--------------------------------------");
        res.status(500).json({ message: "Lỗi hệ thống", detail: err.message });
    }
});

module.exports = router;