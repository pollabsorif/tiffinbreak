const mysql = require('mysql2/promise'); // Use mysql2/promise instead of mysql2

// Replace with your MySQL database credentials
// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'test_user',
//     password: 'password',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

module.exports = db;
