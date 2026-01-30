const sql = require('mssql/msnodesqlv8');

const config = {
    server: 'localhost', 
    database: 'QuanLyBaiXe',
    options: {
        trustedConnection: true, // THÊM DÒNG NÀY: Để dùng quyền Windows của bạn
        encrypt: false, 
        trustServerCertificate: true,
        instanceName: 'SQLEXPRESS' 
    },
    driver: 'msnodesqlv8'
};

module.exports = config;