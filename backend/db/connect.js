

const sql = require('mssql');

const config = {
    user: 'mymy',
    password: '123456',
    server: 'ADMIN-PC\\SQLEXPRESS01',
    database: 'QuanLyBaiXe',
    options: {
        encrypt: false,
        trustServerCertificate: true
    },
    connectionTimeout: 30000
};

async function connectDB() {
    try {
        await sql.connect(config);
        console.log('Kết nối SQL Server thành công');
    } catch (err) {
        console.error('Kết nối SQL Server thất bại:', err);
    }
}

module.exports = connectDB;





