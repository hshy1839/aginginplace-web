const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

const db = require('../database/db.js');

app.listen(port, function() {   
    console.log(`listening on http://localhost:${port}`)
});

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/data', function(req, res) {
    db.query('SELECT * FROM my_table', (err, results) => {
      if (err) {
        console.error('쿼리 실행 에러:', err);
        res.status(500).send('데이터베이스 오류');
        return;
      }
      res.json(results);
    });
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
  });

