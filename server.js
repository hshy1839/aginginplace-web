const express = require('express');
const mysql = require('mysql');
const session = require('express-session');

const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({  
  secret: 'mySecretKey', 
  resave: false,
  saveUninitialized: false
}));

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
  const { username, password, email, name, birthdate, gender, phoneNumber,role} = req.body;

  const query = `INSERT INTO members (username, password, email, name, birthdate, gender, phoneNumber,role) VALUES (?,?, ?, ?, ?, ?, ?, ?)`;

  connection.query(query, [username, password, email, name, birthdate, gender,  phoneNumber,role], (err, result) => {
    if (err) {
      console.error('회원가입 실패: ' + err.stack);
      res.status(500).send('회원가입 실패');
      return;
    }
    console.log('회원가입 성공');
    res.status(200).send('회원가입 성공');
  });
});


app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM members WHERE username = ? AND password = ?`;

  connection.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('로그인 실패: ' + err.stack);
      res.status(500).send('로그인 실패');
      return;
    }
    if (result.length === 0) {
      res.status(401).send('아이디 또는 비밀번호가 올바르지 않습니다.');
      return;
    }
    req.session.userId = result[0].id;
    console.log('세션에 저장된 userId:', req.session.userId);

    res.status(200).json(result[0]);
  });
});




app.get('/api/userinfo', (req, res) => {
  const userId = req.session.userId;
  if (!userId) {
    res.status(401).send('로그인이 필요합니다.');
    return;
  }

  const query = `SELECT email, phoneNumber, birthdate, gender, name, role FROM members WHERE id = ?`;
  connection.query(query, [userId], (err, result) => {
    if (err) {
      console.error('사용자 정보 조회 실패: ' + err.stack);
      res.status(500).json({ error: '사용자 정보 조회 실패' });
      return;
    }
    if (result.length === 0) {
      res.status(404).json({ error: '사용자 정보를 찾을 수 없습니다.' });
      return;
    }

    res.status(200).json(result[0]); 
  });
});


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/', (req, res) => {
  res.send('Welcome to the Aging In Place API!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`서버 시작: http://localhost:${port}`);
});