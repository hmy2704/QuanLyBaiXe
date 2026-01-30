USE QuanLyBaiXe;
GO


IF OBJECT_ID('BaoCao_HoaDon', 'U') IS NOT NULL DROP TABLE BaoCao_HoaDon;
IF OBJECT_ID('ChiTietHoaDon', 'U') IS NOT NULL DROP TABLE ChiTietHoaDon;
IF OBJECT_ID('HoaDon', 'U') IS NOT NULL DROP TABLE HoaDon;
IF OBJECT_ID('BaoCaoThongKe', 'U') IS NOT NULL DROP TABLE BaoCaoThongKe;
IF OBJECT_ID('BangGiaGuiXe', 'U') IS NOT NULL DROP TABLE BangGiaGuiXe;
GO


CREATE TABLE BaoCaoThongKe
(
    BaoCaoId INT IDENTITY(1,1) PRIMARY KEY,
    TuNgay DATE NOT NULL,
    DenNgay DATE NOT NULL,
    TongLuotGui INT DEFAULT 0,
    TongDoanhThu DECIMAL(15,2) DEFAULT 0,
    ThoiGianTao DATETIME DEFAULT GETDATE()
);

CREATE TABLE BangGiaGuiXe
(
    BangGiaId INT IDENTITY(1,1) PRIMARY KEY,
    LoaiXe NVARCHAR(50) NOT NULL UNIQUE,
    GiaTheoGio DECIMAL(10,2) NOT NULL,
    GiaTheoNgay DECIMAL(10,2),
    TrangThai BIT DEFAULT 1
);

CREATE TABLE HoaDon
(
    HoaDonId INT IDENTITY(1,1) PRIMARY KEY,
    ThoiDiemVao DATETIME NOT NULL DEFAULT GETDATE(),
    ThoiDiemRa DATETIME,
    TongTien DECIMAL(12,2),
    TrangThaiThanhToan NVARCHAR(30) DEFAULT N'Chưa thanh toán',
    -- Để tiếng Việt có dấu cho đồng bộ
    NhanVienId INT,
    BaoCaoId INT,
    CONSTRAINT FK_HoaDon_NhanVien FOREIGN KEY (NhanVienId) REFERENCES NhanVien(NhanVienId),
    CONSTRAINT FK_HoaDon_BaoCao FOREIGN KEY (BaoCaoId) REFERENCES BaoCaoThongKe(BaoCaoId)
);

CREATE TABLE ChiTietHoaDon
(
    ChiTietHoaDonId INT IDENTITY(1,1) PRIMARY KEY,
    HoaDonId INT NOT NULL,
    BangGiaId INT NOT NULL,
    LoaiXe NVARCHAR(50) NOT NULL,
    SoGioGui INT,
    ThanhTien DECIMAL(12,2),
    CONSTRAINT FK_CTHD_HoaDon FOREIGN KEY (HoaDonId) REFERENCES HoaDon(HoaDonId),
    CONSTRAINT FK_CTHD_BangGia FOREIGN KEY (BangGiaId) REFERENCES BangGiaGuiXe(BangGiaId)
);

CREATE TABLE BaoCao_HoaDon
(
    BaoCaoId INT NOT NULL,
    HoaDonId INT NOT NULL,
    PRIMARY KEY (BaoCaoId, HoaDonId),
    CONSTRAINT FK_BCHD_BaoCao FOREIGN KEY (BaoCaoId) REFERENCES BaoCaoThongKe(BaoCaoId),
    CONSTRAINT FK_BCHD_HoaDon FOREIGN KEY (HoaDonId) REFERENCES HoaDon(HoaDonId)
);
GO


INSERT INTO BangGiaGuiXe
    (LoaiXe, GiaTheoGio, GiaTheoNgay)
VALUES
    (N'Xe máy', 5000, 50000),
    (N'Ô tô', 20000, 200000);

INSERT INTO BaoCaoThongKe
    (TuNgay, DenNgay)
VALUES
    (CAST(GETDATE() AS DATE), CAST(GETDATE() AS DATE));
GO