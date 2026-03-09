const config = {
    // Nên dùng localhost để linh hoạt hơn nếu chạy trên máy cá nhân
    connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS;Database=QuanLyBaiXe;Trusted_Connection=yes;'
};

    //connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS;Database=QuanLyBaiXe;Trusted_Connection=yes;',
    //connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=DELL-PC;Database=QuanLyBaiXe;Trusted_Connection=yes;',
connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=Ham;Database=QuanLyBaiXe;Trusted_Connection=yes;',

    connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=ADMIN-PC\\SQLEXPRESS01;Database=QuanLyBaiXe;Trusted_Connection=yes;',
}



module.exports = config;