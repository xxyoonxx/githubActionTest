const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// html 디렉토리 이름
app.use(express.static(path.join(__dirname, 'public')));

// GET요청 핸들러
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`추가된 내용`);
});