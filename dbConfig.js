const config = {
    // Dùng localhost và double backslash (\\) để tránh lỗi format
    connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-6D4G1B3\\SQLEXPRESS;Database=QuanLyBaiXe;Trusted_Connection=yes;'
};




    connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=Ham\\SQLEXPRESS01;Database=QuanLyBaiXe;Trusted_Connection=yes;',
    connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS;Database=QuanLyBaiXe;Trusted_Connection=yes;',
};


module.exports = config;