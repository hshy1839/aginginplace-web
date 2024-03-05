const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'kangsh',
  password: '3360',
  database: 'aginginplace'
});

connection.connect((err) => {
  if (err) {
    console.error('DB 연결 실패: ' + err.stack);
    return;
  }
  console.log('DB 연결 성공');
});

app.post('/api/signup', (req, res) => {
  const { username, password, email, name, birthdate, gender, phoneNumber } = req.body;

  const query = `INSERT INTO members (username, password, email, name, birthdate, gender, phoneNumber) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  connection.query(query, [username, password, email, name, birthdate, gender,  phoneNumber], (err, result) => {
    if (err) {
      console.error('회원가입 실패: ' + err.stack);
      res.status(500).send('회원가입 실패');
      return;
    }
    console.log('회원가입 성공');
    res.status(200).send('회원가입 성공');
  });
});

app.get('/', (req, res) => {
  res.send('Welcome to the Aging In Place API!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`서버 시작: http://localhost:${port}`);
});
