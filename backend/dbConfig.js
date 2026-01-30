const sql = require('mssql/msnodesqlv8');

const config = {
    server: 'localhost', 
    database: 'QuanLyBaiXe',
    options: {
        trustedConnection: true, 
        encrypt: false, 
        trustServerCertificate: true,
        instanceName: 'SQLEXPRESS' 
    },
    driver: 'msnodesqlv8'
};

module.exports = config;