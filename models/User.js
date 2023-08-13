// models/User.js
const db = require('./db'); // Assuming 'db' is the MySQL connection

const User = {};

User.create = (username, password, phoneNumber, callback) => {
  const sql = 'INSERT INTO users (username, password, phone_number) VALUES (?, ?, ?)';
  db.query(sql, [username, password, phoneNumber], (err, result) => {
    if (err) return callback(err);
    callback(null, result.insertId);
  });
};

User.findByUsername = (u_name, callback) => {
  const sql = 'SELECT * FROM users WHERE u_name = ?';
  db.query(sql, [u_name], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

module.exports = User;
