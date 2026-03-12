const config = {
    // Dùng localhost và double backslash (\\) để tránh lỗi format
    connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS;Database=QuanLyBaiXe;Trusted_Connection=yes;'
};

module.exports = config;