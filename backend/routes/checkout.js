const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

// 1. API Tìm kiếm thông tin xe để hiện lên Form
// File: backend/routes/checkout.js
// File: backend/routes/checkout.js

router.get('/xera/:keyword', async (req, res) => {
    try {
        // 1. Lấy mã vé từ URL và xóa khoảng trắng thừa
        const keyword = req.params.keyword ? req.params.keyword.trim() : "";
        console.log("Đang tìm kiếm xe với mã vé:", keyword);

        if (!keyword) {
            return res.status(400).json({ message: "Vui lòng cung cấp mã vé!" });
        }

        let pool = await sql.connect(config);

        // 2. Truy vấn dùng LEFT JOIN để không bị mất dữ liệu khi XeId bị NULL
        let result = await pool.request()
            .input('kw', sql.VarChar, keyword)
            .query(`
                SELECT TOP 1 
    L.LuotGuiId, 
    L.VeXeId, 
    -- Ưu tiên hiển thị Biển số (nếu có), nếu không có thì hiển thị 'Số cuối: ' + SoCuoi
    ISNULL(X.BienSo, CONCAT(N'Số cuối: ', L.SoCuoi)) as BienSo, 
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
            return res.status(404).json({ message: "Không tìm thấy xe trong bãi với mã vé: " + keyword });
        }

        res.json(result.recordset[0]);
    } catch (err) {
        console.error("Lỗi tại Backend:", err.message);
        res.status(500).json({ message: "Lỗi hệ thống", error: err.message });
    }
});
// 2. API Ghi nhận xe ra (Cập nhật tiền và trạng thái vé)
router.post('/checkout', async (req, res) => {
    try {
        const { VeXeId } = req.body;
        let pool = await sql.connect(config);

        // 1. Cập nhật lượt gửi (Thêm thời gian ra và phí)
        // Bạn không cần SELECT lại, hãy UPDATE trực tiếp dựa trên VeXeId và ThoiGianRa IS NULL
        const result = await pool.request()
            .input('veId', sql.Int, VeXeId)
            .query(`
                UPDATE LuotGui 
                SET ThoiGianRa = GETDATE(), 
                    PhiGui = 5000 -- Bạn có thể tính toán logic tiền ở đây
                WHERE VeXeId = @veId AND ThoiGianRa IS NULL;

                UPDATE VeXe SET TrangThai = N'Trống' WHERE VeXeId = @veId;
            `);

        if (result.rowsAffected[0] === 0) {
            return res.status(400).json({ message: "Không tìm thấy lượt gửi đang hoạt động cho vé này!" });
        }

        res.status(200).json({ message: "Thanh toán thành công!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Lỗi hệ thống", error: err.message });
    }
});
module.exports = router;