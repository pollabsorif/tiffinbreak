// models/Order.js
const db = require('./db'); // Assuming 'db' is the MySQL connection

const Order = {};

Order.create = (userId, foodItem, quantity, callback) => {
  const sql = 'INSERT INTO orders (user_id, food_item, quantity) VALUES (?, ?, ?)';
  db.query(sql, [userId, foodItem, quantity], (err, result) => {
    if (err) return callback(err);
    callback(null, result.insertId);
  });
};

Order.getAllByUser = (userId, callback) => {
  const sql = 'SELECT * FROM orders WHERE user_id = ?';
  db.query(sql, [userId], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

module.exports = Order;
