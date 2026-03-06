const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');

router.get('/nhanvien', async (req, res) => {
    try {
        const result = await global.pool.request().query("SELECT * FROM NhanVien");
        res.json(result.recordset);
    } catch (err) { res.status(500).json(err); }
});

router.post('/nhanvien', async (req, res) => {

    console.log("Dữ liệu từ client:", req.body);

    const { HoTen, SoDienThoai, ChucVu } = req.body;

    try {
        await global.pool.request()
            .input('HoTen', HoTen)
            .input('SoDienThoai', SoDienThoai)
            .input('ChucVu', ChucVu)
            .query("INSERT INTO NhanVien (HoTen, SoDienThoai, ChucVu) VALUES (@HoTen, @SoDienThoai, @ChucVu)");
        res.json({ message: "Thêm thành công" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
router.delete('/nhanvien/:id', async (req, res) => {
    const role = req.header('x-user-role');
    if (role !== 'Admin') return res.status(403).json({ message: "Không có quyền!" });

    try {
        await global.pool.request()
            .input('id', req.params.id)
            .query("DELETE FROM NhanVien WHERE NhanVienId = @id");
        res.json({ message: "Deleted" });
    } catch (err) { res.status(500).json(err); }
});

module.exports = router;