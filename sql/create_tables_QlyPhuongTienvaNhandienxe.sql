-- 1. Bảng Loại Xe
CREATE TABLE LoaiXe (
    LoaiXeId INT AUTO_INCREMENT PRIMARY KEY,
    TenLoaiXe VARCHAR(50) NOT NULL, -- Ví dụ: Xe máy, Ô tô [cite: 71]
    GiaTienLuot DECIMAL(10, 2) NOT NULL DEFAULT 0, -- [cite: 89]
    GiaTienThang DECIMAL(10, 2) NOT NULL DEFAULT 0
);

-- 2. Bảng Xe
CREATE TABLE Xe (
    XeId INT AUTO_INCREMENT PRIMARY KEY,
    BienSo VARCHAR(20) NOT NULL UNIQUE, -- Ràng buộc duy nhất cho biển số [cite: 72, 85]
    LoaiXeId INT NOT NULL,
    CONSTRAINT FK_Xe_LoaiXe FOREIGN KEY (LoaiXeId) REFERENCES LoaiXe(LoaiXeId)
);

-- 3. Bảng Vé Xe
CREATE TABLE VeXe (
    VeXeId INT AUTO_INCREMENT PRIMARY KEY,
    MaVe VARCHAR(50) NOT NULL UNIQUE, -- Mã thẻ từ hoặc vé giấy [cite: 20, 77]
    LoaiVe VARCHAR(20) NOT NULL, -- Vé lượt hoặc Vé tháng [cite: 73, 97]
    TrangThai VARCHAR(20) DEFAULT 'TRỐNG' -- TRỐNG, ĐANG SỬ DỤNG, HẾT HẠN [cite: 29, 102]
);

-- 4. Bảng Lượt Gửi (Thực thể trung tâm)
CREATE TABLE LuotGui (
    LuotGuiId INT AUTO_INCREMENT PRIMARY KEY,
    Thoigianvao DATETIME NOT NULL, -- Ghi nhận thời điểm vào [cite: 78]
    Thoigianra DATETIME NULL, -- Có thể NULL khi xe đang trong bãi [cite: 86]
    PhiGui DECIMAL(10, 2) DEFAULT 0, -- Tính toán phí dựa trên loại xe và thời gian 
    XeId INT NOT NULL,
    VeXeId INT NOT NULL,
    CONSTRAINT FK_LuotGui_Xe FOREIGN KEY (XeId) REFERENCES Xe(XeId),
    CONSTRAINT FK_LuotGui_VeXe FOREIGN KEY (VeXeId) REFERENCES VeXe(VeXeId)
);

-- 5. Bảng Hình Ảnh Xe (Lưu trữ ảnh camera đối soát)
CREATE TABLE HinhAnhXe (
    HinhAnhId INT AUTO_INCREMENT PRIMARY KEY,
    LuotGuiId INT NOT NULL, -- Liên kết với lượt gửi cụ thể
    DuongDanAnh VARCHAR(255) NOT NULL, -- Đường dẫn đến file ảnh [cite: 139]
    LoaiHinh VARCHAR(10) NOT NULL, -- 'VAO' hoặc 'RA' 
    CONSTRAINT FK_HinhAnh_LuotGui FOREIGN KEY (LuotGuiId) REFERENCES LuotGui(LuotGuiId)
);