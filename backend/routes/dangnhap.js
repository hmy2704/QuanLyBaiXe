const express = require("express");
const router = express();
const sql = require("mssql/msnodesqlv8");
const config = require("../dbConfig");

router.post("/login", async (req, res) => {
    const {username, password} = req.body;
    let pool = await sql.connect(config);
    let user = await pool.request()
        .input('u', sql.VarChar, username)
        .input('p', sql.VarChar, password)
        .query('SELECT T.*, P.TenQuyen FROM TaiKhoan T JOIN PhanQuyen P ON T.PhanQuyenId = P.PhanQuyenId WHERE TenDangNhap = @u AND MatKhau = @p');

    if (user.recordset.length > 0) {
        res.json({ message: "Đăng nhập thành công!", user: user.recordset[0] });
    } else {
        res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu" });
    }
});
module.exports = router;
