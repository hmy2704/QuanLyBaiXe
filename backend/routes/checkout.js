const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

router.post('/checkout', async (req, res) => {
    try {
        const { VeGuiId } = req.body;
        let pool = await sql.connect(config);


        let result = await pool.request()
            .input('veId', sql.Int, VeGuiId)
            .query(`
                SELECT TOP 1 
                    LuotGuiId, 
                    ThoiGianVao,
                    GETDATE() as ThoiGianRa,
                    -- Tính số giờ chênh lệch (ít nhất là 1 giờ)
                    CEILING(CAST(DATEDIFF(SECOND, ThoiGianVao, GETDATE()) AS FLOAT) / 1800) * 2500 as PhiGui
                FROM LuotGui 
                WHERE VeXeId = @veId AND ThoiGianRa IS NULL 
                ORDER BY ThoiGianVao DESC
            `);

        if (result.recordset.length === 0) {
            return res.status(400).json({ message: "Không tìm thấy xe đang gửi!" });
        }

        const { LuotGuiId, ThoiGianVao, ThoiGianRa, SoGio } = result.recordset[0];


        const tongGio = SoGio <= 0 ? 1 : SoGio;
        const phiGui = tongGio * 5000;


        await pool.request()
            .input('luotId', sql.Int, LuotGuiId)
            .input('tgRa', sql.DateTime, ThoiGianRa)
            .input('phi', sql.Decimal(18, 2), phiGui)
            .input('veId', sql.Int, VeGuiId)
            .query(`
                UPDATE LuotGui 
                SET ThoiGianRa = @tgRa, PhiGui = @phi, TrangThaiThanhToan = 1 
                WHERE LuotGuiId = @luotId;

                UPDATE VeXe SET TrangThai = N'Trống' WHERE VeXeId = @veId;
            `);

        res.status(200).json({
            status: "OK",
            message: "Thanh toán đã thành công!",
            data: {
                Vao: ThoiGianVao,
                Ra: ThoiGianRa,
                TongGio: tongGio,
                TongTien: phiGui
            }
        });

    } catch (err) {
        res.status(500).json({ message: "Đã lỗi hệ thống", error: err.message });
    }
});

module.exports = router;