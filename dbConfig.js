const config = {
<<<<<<< HEAD
    // Dùng localhost và double backslash (\\) để tránh lỗi format
    connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-6D4G1B3\SQLEXPRESS;Database=QuanLyBaiXe;Trusted_Connection=yes;'
};
=======
    // Nên dùng localhost để linh hoạt hơn nếu chạy trên máy cá nhân
    //connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS;Database=QuanLyBaiXe;Trusted_Connection=yes;'


    //connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS;Database=QuanLyBaiXe;Trusted_Connection=yes;',
<<<<<<< HEAD
   connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS;Database=QuanLyBaiXe;Trusted_Connection=yes;',
    //connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=DELL-PC;Database=QuanLyBaiXe;Trusted_Connection=yes;',
//connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=Ham;Database=QuanLyBaiXe;Trusted_Connection=yes;',
=======
   //connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=localhost\\SQLEXPRESS;Database=QuanLyBaiXe;Trusted_Connection=yes;',
    //connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=DELL-PC;Database=QuanLyBaiXe;Trusted_Connection=yes;',
    connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=Ham;Database=QuanLyBaiXe;Trusted_Connection=yes;',
>>>>>>> 3932f1e65241f5089661b77bacfef03b15474646

    //connectionString: 'Driver={ODBC Driver 17 for SQL Server};Server=ADMIN-PC\\SQLEXPRESS01;Database=QuanLyBaiXe;Trusted_Connection=yes;',
}
>>>>>>> bf6da652e89191c6432a90cbc86e2fa507a023e1



module.exports = config;