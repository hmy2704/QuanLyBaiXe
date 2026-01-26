const sql = require('mssql');

const config = {
    server: 'ADMIN-PC\\SQLEXPRESS01',
    database: 'QuanLyBaiXe',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },

    driver: 'msnodesqlv8',
    connectionString: 'Driver={SQL Server Native Client 11.0};Server=ADMIN-PC\\SQLEXPRESS01;Database=QuanLyBaiXe;Trusted_Connection=yes;'
};

module.exports = config;