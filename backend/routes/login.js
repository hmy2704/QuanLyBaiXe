const express = require("express");
const router = express.Router();
const sql = require("mssql/msnodesqlv8");
const config = require("../../dbConfig");

router.post("/login", async (req, res) => {
    try {

        const { TenDangNhap, MatKhau } = req.body;

        let pool = await sql.connect(config);


        let user = await pool.request()
            .input('u', sql.VarChar, TenDangNhap)
            .input('p', sql.VarChar, MatKhau)
            .query(`
                SELECT T.*, P.TenQuyen 
                FROM TaiKhoan T 
                JOIN PhanQuyen P ON T.PhanQuyenId = P.PhanQuyenId 
                WHERE T.TenDangNhap = @u AND T.MatKhau = @p
            `);

        if (user.recordset.length > 0) {

            res.json({
                message: "Đăng nhập thành công!",
                user: user.recordset[0]
            });
        } else {
            res.status(401).json({ message: "Sai tài khoản hoặc mật khẩu" });
        }
    } catch (err) {
        res.status(500).json({ message: "Lỗi kết nối server", error: err.message });
    }
});

module.exports = router;