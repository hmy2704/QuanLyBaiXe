const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');


router.post('/extend-vethang', async (req, res) => {
    try {
        const { bienSo, thangGiaHan } = req.body;
        let pool = await sql.connect(config);

        await pool.request()
            .input('bs', sql.VarChar, bienSo)
            .input('months', sql.Int, thangGiaHan)
            .query(`
                UPDATE VeThang 
                SET NgayHetHan = DATEADD(month, @months, 
                    CASE WHEN NgayHetHan < GETDATE() THEN GETDATE() ELSE NgayHetHan END
                ),
                TrangThai = N'Hoạt động'
                WHERE BienSo = @bs
            `);

        res.json({ success: true, message: `Đã gia hạn thành công xe ${bienSo} thêm ${thangGiaHan} tháng!` });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

module.exports = router;