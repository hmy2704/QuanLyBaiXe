USE QuanLyBaiXe;
GO



IF OBJECT_ID('HinhAnhXe', 'U') IS NOT NULL DROP TABLE HinhAnhXe;
IF OBJECT_ID('ChiTietHoaDon', 'U') IS NOT NULL DROP TABLE ChiTietHoaDon;


IF OBJECT_ID('LuotGui', 'U') IS NOT NULL DROP TABLE LuotGui;


IF OBJECT_ID('VeGui', 'U') IS NOT NULL DROP TABLE VeGui;
IF OBJECT_ID('TrangThaiVe', 'U') IS NOT NULL DROP TABLE TrangThaiVe;
IF OBJECT_ID('LoaiVe', 'U') IS NOT NULL DROP TABLE LoaiVe;
GO


CREATE TABLE LoaiVe
(
    LoaiVeId INT IDENTITY(1,1) PRIMARY KEY,
    TenLoaiVe NVARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE TrangThaiVe
(
    TrangThaiId INT IDENTITY(1,1) PRIMARY KEY,
    TenTrangThai NVARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE VeGui
(
    VeGuiId INT IDENTITY(1,1) PRIMARY KEY,
    LoaiVeId INT NOT NULL,
    TrangThaiId INT NOT NULL,
    NgayTao DATETIME DEFAULT GETDATE(),
    CONSTRAINT FK_VeGui_LoaiVe FOREIGN KEY (LoaiVeId) REFERENCES LoaiVe(LoaiVeId),
    CONSTRAINT FK_VeGui_TrangThai FOREIGN KEY (TrangThaiId) REFERENCES TrangThaiVe(TrangThaiId)
);

CREATE TABLE LuotGui
(
    LuotGuiId INT IDENTITY(1,1) PRIMARY KEY,
    VeGuiId INT NOT NULL,
    BienSo VARCHAR(20) NOT NULL,
    MauXe NVARCHAR(50),
    ThoiGianVao DATETIME DEFAULT GETDATE(),
    ThoiGianRa DATETIME NULL,
    TongTien DECIMAL(18, 2) DEFAULT 0,
    TrangThaiThanhToan BIT DEFAULT 0,
    CONSTRAINT FK_LuotGui_VeGui FOREIGN KEY (VeGuiId) REFERENCES VeGui(VeGuiId)
);
GO


INSERT INTO LoaiVe
    (TenLoaiVe)
VALUES
    (N'Xe máy'),
    (N'Ô tô');
INSERT INTO TrangThaiVe
    (TenTrangThai)
VALUES
    (N'Trống'),
    (N'Đang sử dụng');


INSERT INTO VeGui
    (LoaiVeId, TrangThaiId)
VALUES
    (1, 1),
    (1, 1),
    (1, 1),
    (2, 1),
    (2, 1);
GO