const express = require('express');
const connectDB = require('./db/connect');

const app = express();
const PORT = 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});

