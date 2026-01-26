const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../dbConfig');

router.post('/checkout', async (req, res) => {
    try {
        const { maVe } = req.body;
        let pool = await sql.connect(config);

        // Tìm lượt gửi chưa kết thúc của vé này
        let result = await pool.request()
            .input('maVe', sql.VarChar, maVe)
            .query(`
                SELECT L.LuotGuiId, L.ThoiGianGui, V.VeGuiId 
                FROM LuotGui L JOIN VeGui V ON L.VeGuiId = V.VeGuiId 
                WHERE V.MaVe = @maVe AND L.KetQua = N'Xe đã vào'`);

        if (result.recordset.length === 0) return res.status(404).send("Không tìm thấy lượt xe này!");

        const { LuotGuiId, ThoiGianGui, VeGuiId } = result.recordset[0];
        
        // Tính tiền (Giả sử 5000đ/giờ, tối thiểu 1 giờ)
        const thoiGianVao = new Date(ThoiGianGui);
        const bayGio = new Date();
        const soGio = Math.max(1, Math.ceil((bayGio - thoiGianVao) / (1000 * 60 * 60)));
        const tongTien = soGio * 5000;

        // Cập nhật lượt gửi và trả vé về trạng thái TRỐNG
        await pool.request()
            .input('id', sql.Int, LuotGuiId)
            .input('veId', sql.Int, VeGuiId)
            .input('tien', sql.Decimal, tongTien)
            .query(`
                UPDATE LuotGui SET KetQua = N'Đã ra', ThoiGianGui = GETDATE() WHERE LuotGuiId = @id;
                UPDATE VeGui SET TrangThaiId = 1 WHERE VeGuiId = @veId;
            `);

        res.json({ message: "Thanh toán thành công", soTien: tongTien, thoiGianGui: soGio + " giờ" });
    } catch (err) { res.status(500).send(err.message); }
});
module.exports = router;