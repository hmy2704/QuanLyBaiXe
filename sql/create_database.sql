IF NOT EXISTS (SELECT *FROM sys.databases
WHERE name = 'QuanLyBaiXe')
BEGIN
    CREATE DATABASE QuanLyBaiXe;
END
GO

USE QuanLyBaiXe;
GO