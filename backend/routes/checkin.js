const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkin', async (req, res) => {
    try {
        // Lấy dữ liệu từ Postman
        const { VeGuiId, BienSo, MauXe } = req.body; 

        let pool = await sql.connect(config);

        // BƯỚC 1: Kiểm tra vé có TRỐNG không (Khớp với bảng VeXe và giá trị N'TRỐNG')
        let veCheck = await pool.request()
            .input('veId', sql.Int, VeGuiId)
            .query("SELECT VeXeId FROM VeXe WHERE VeXeId = @veId AND TrangThai = N'TRỐNG'");

        if (veCheck.recordset.length === 0) {
            return res.status(400).json({ message: "Vé không tồn tại hoặc đã có xe dùng!" });
        }

        const vId = veCheck.recordset[0].VeXeId;

        // BƯỚC 2: Xử lý logic SQL
        await pool.request()
            .input('vId', sql.Int, vId)
            .input('bs', sql.VarChar, BienSo)
            .input('mx', sql.NVarChar, MauXe)
            .query(`
                -- 1. Nếu xe chưa tồn tại trong bảng Xe, thêm mới (mặc định LoaiXeId = 1 - Xe máy)
                IF NOT EXISTS (SELECT 1 FROM Xe WHERE BienSo = @bs)
                    INSERT INTO Xe (BienSo, MauXe, LoaiXeId) VALUES (@bs, @mx, 1);
                ELSE
                    UPDATE Xe SET MauXe = @mx WHERE BienSo = @bs; -- Cập nhật màu xe nếu cần

                -- 2. Lấy XeId chính xác của xe đó
                DECLARE @CurrentXeId INT = (SELECT XeId FROM Xe WHERE BienSo = @bs);

                -- 3. Chèn vào bảng LuotGui 
                -- (Lưu ý: Bỏ TrangThaiThanhToan và MauXe vì bảng LuotGui của bạn không có 2 cột này)
                INSERT INTO LuotGui (VeXeId, ThoiGianVao, XeId, PhiGui) 
                VALUES (@vId, GETDATE(), @CurrentXeId, 0);

                -- 4. Cập nhật trạng thái vé thành 'ĐANG SỬ DỤNG'
                UPDATE VeXe SET TrangThai = N'ĐANG SỬ DỤNG' WHERE VeXeId = @vId;
            `);

        res.status(200).json({ status: "OK", message: "Check-in thành công!" });

    } catch (err) {
        console.error("Lỗi chi tiết:", err.message);
        res.status(500).json({ message: "Lỗi hệ thống", error: err.message });
    }
});

module.exports = router;