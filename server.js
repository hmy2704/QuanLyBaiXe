const PORT = 3000;
const API_BASE_URL = 'http://localhost:3000'; // IP máy chủ của bạn
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql/msnodesqlv8');
const config = require('./dbConfig');


// Khai báo ứng dụng
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-user-role");
    next();
});
app.use(cors());
app.use(express.static('frontend'));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 1. KẾT NỐI DATABASE
sql.connect(config).then(pool => {
    if (pool.connected) {
        global.pool = pool;
        console.log("");
        console.log("KẾT NỐI SQL SERVER THÀNH CÔNG!");
        console.log("");
    }
}).catch(err => {
    console.error("LỖI KẾT NỐI DATABASE: ", err.message);
});


const authRoutes = require('./backend/routes/login');
const checkinRoutes = require('./backend/routes/checkin');
const checkoutRoutes = require('./backend/routes/checkout');
const reportRoutes = require('./backend/routes/report');
const nhanvienRoutes = require('./backend/routes/nhanvien');

// 3. ĐĂNG KÝ CÁC ĐƯỜNG DẪN API
app.use('/api', authRoutes);
app.use('/api', checkinRoutes);
app.use('/api', checkoutRoutes);
app.use('/api', reportRoutes);
app.use('/api', nhanvienRoutes);


app.get('/', (req, res) => {
    res.send(" Server QuanLyBaiXe đang chạy...");
});

// 5. CHẠY SERVER
app.listen(PORT, () => {
    console.log(`Server đang lắng nghe tại: http://localhost:${PORT}`);
});