const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

// 1. API Tìm kiếm xe theo mã vé
router.get('/xera/:maVe', async (req, res) => {
    try {
        let pool = await sql.connect(config);
        // Lưu ý: Dùng MaVe (từ bảng VeXe) hoặc VeXeId tùy logic của bạn
        let result = await pool.request()
            .input('maVe', sql.VarChar, req.params.maVe)
            .query(`
                SELECT TOP 1 
                    L.VeXeId, 
                    X.BienSo, 
                    L.ThoiGianVao,
                    X.MauXe
                FROM LuotGui L
                JOIN VeXe V ON L.VeXeId = V.VeXeId
                JOIN Xe X ON L.XeId = X.XeId
                WHERE V.MaVe = @maVe AND L.ThoiGianRa IS NULL
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

// 2. API Ghi nhận xe ra (Checkout)
router.post('/checkout', async (req, res) => {
    try {
        const { VeXeId } = req.body; // Lấy VeXeId từ client gửi lên
        let pool = await sql.connect(config);

        // Lấy thông tin lượt vào
        let result = await pool.request()
            .input('veId', sql.Int, VeXeId)
            .query(`
                SELECT TOP 1 
                    LuotGuiId, 
                    ThoiGianVao,
                    DATEDIFF(HOUR, ThoiGianVao, GETDATE()) as SoGio
                FROM LuotGui 
                WHERE VeXeId = @veId AND ThoiGianRa IS NULL 
                ORDER BY ThoiGianVao DESC
            `);

        if (result.recordset.length === 0) {
            return res.status(400).json({ message: "Không tìm thấy dữ liệu xe vào!" });
        }

        const { LuotGuiId, ThoiGianVao, SoGio } = result.recordset[0];

        // Tính tiền: Ít nhất 5.000đ (Xe máy)
        const tongGio = SoGio <= 0 ? 1 : SoGio;
        const phiGui = tongGio * 5000;
        const thoiGianRa = new Date();

        // Cập nhật Database
        await pool.request()
            .input('luotId', sql.Int, LuotGuiId)
            .input('tgRa', sql.DateTime, thoiGianRa)
            .input('phi', sql.Decimal(10, 2), phiGui)
            .input('veId', sql.Int, VeXeId)
            .query(`
                UPDATE LuotGui 
                SET ThoiGianRa = @tgRa, PhiGui = @phi 
                WHERE LuotGuiId = @luotId;

             -- Cập nhật trạng thái vé trở về 'Trống'
UPDATE VeXe SET TrangThai = N'Trống' WHERE VeXeId = @veId;
            `);

        res.status(200).json({
            status: "OK",
            message: "Thanh toán thành công!",
            data: { Vao: ThoiGianVao, Ra: thoiGianRa, TongTien: phiGui }
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Lỗi hệ thống", error: err.message });
    }
});

module.exports = router;