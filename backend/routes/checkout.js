const express = require('express');
const router = express.Router();
const sql = require('mssql/msnodesqlv8');
const config = require('../../dbConfig');

// 1. API Tìm kiếm xe theo mã vé
router.get('/xera/:maVe', async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('maVe', sql.Int, req.params.maVe)
            .query(`
                SELECT TOP 1 
                    L.VeXeld, 
                    X.BienSo, 
                    L.ThoiGianVao,
                    -- Giả định có bảng LoaiXe nối với bảng Xe
                    N'Xe máy' as TenLoaiXe 
                FROM LuotGui L
                JOIN Xe X ON L.Xeld = X.Xeld
                WHERE L.VeXeld = @maVe AND L.ThoiGianRa IS NULL
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
        const { VeGuiId } = req.body;
        let pool = await sql.connect(config);

        // Lấy thông tin lượt vào để tính tiền
        let result = await pool.request()
            .input('veId', sql.Int, VeGuiId)
            .query(`
                SELECT TOP 1 
                    LuotGuild, 
                    ThoiGianVao,
                    DATEDIFF(HOUR, ThoiGianVao, GETDATE()) as SoGio
                FROM LuotGui 
                WHERE VeXeld = @veId AND ThoiGianRa IS NULL 
                ORDER BY ThoiGianVao DESC
            `);

        if (result.recordset.length === 0) {
            return res.status(400).json({ message: "Không tìm thấy dữ liệu xe vào!" });
        }

        const { LuotGuild, ThoiGianVao, SoGio } = result.recordset[0];
        
        // Tính tiền: Ít nhất 1 giờ, mỗi giờ 5000đ (Bạn có thể sửa công thức này)
        const tongGio = SoGio <= 0 ? 1 : SoGio;
        const phiGui = tongGio * 5000;
        const thoiGianRa = new Date();

        // Cập nhật Database
        await pool.request()
            .input('luotId', sql.Int, LuotGuild)
            .input('tgRa', sql.DateTime, thoiGianRa)
            .input('phi', sql.Decimal(18, 2), phiGui)
            .input('veId', sql.Int, VeGuiId)
            .query(`
                -- Cập nhật giờ ra và phí gửi
                UPDATE LuotGui 
                SET ThoiGianRa = @tgRa, PhiGui = @phi 
                WHERE LuotGuild = @luotId;

                -- Trả trạng thái vé về 1 (Trống) để dùng cho xe khác
                UPDATE VeGui SET TrangThaild = 1 WHERE VeGuild = @veId;
            `);

        res.status(200).json({
            status: "OK",
            message: "Thanh toán thành công!",
            data: {
                Vao: ThoiGianVao,
                Ra: thoiGianRa,
                TongGio: tongGio,
                TongTien: phiGui
            }
        });

    } catch (err) {
        res.status(500).json({ message: "Lỗi hệ thống", error: err.message });
    }
});

module.exports = router;