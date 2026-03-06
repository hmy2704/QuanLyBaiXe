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
    const role = req.header('x-user-role');
    if (role !== 'Admin') return res.status(403).json({ message: "Chỉ Admin mới có quyền!" });

    try {
        await global.pool.request()
            .input('HoTen', req.body.HoTen)
            .input('SoDienThoai', req.body.SoDienThoai)
            .query("INSERT INTO NhanVien (HoTen, SoDienThoai) VALUES (@HoTen, @SoDienThoai)");
        res.json({ message: "OK" });
    } catch (err) { res.status(500).json(err); }
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