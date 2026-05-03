const express = require("express");
const router = express.Router();
const sql = require("mssql/msnodesqlv8");
const config = require("../../dbConfig");

router.post("/login", async (req, res) => {
    try {
        const { TenDangNhap, MatKhau } = req.body;
        let pool = await sql.connect(config);

        let userResult = await pool.request()
            .input('u', sql.VarChar, TenDangNhap)
            .input('p', sql.VarChar, MatKhau)
            .query(`
                SELECT T.TaiKhoanId, T.TenDangNhap, P.TenQuyen 
                FROM TaiKhoan T 
                JOIN PhanQuyen P ON T.PhanQuyenId = P.PhanQuyenId 
                WHERE T.TenDangNhap = @u AND T.MatKhau = @p
            `);

        if (userResult.recordset.length > 0) {
            const user = userResult.recordset[0];


            res.json({
                success: true,
                message: "Đăng nhập thành công!",
                user: {
                    id: user.TaiKhoanId,
                    username: user.TenDangNhap,
                    role: user.TenQuyen
                }
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Tài khoản không tồn tại hoặc sai mật khẩu"
            });
        }
    } catch (err) {

        console.error("🔥 LỖI LOGIN:", err); 

        
        res.status(500).json({
            success: false,
            message: "Lỗi kết nối server",
            error: err.message
        });
    }
});

module.exports = router;