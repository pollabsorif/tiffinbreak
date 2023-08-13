// db.js
const mysql = require('mysql');
// Replace with your MySQL database credentials
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tiffin_break',
  });

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

module.exports = db;
