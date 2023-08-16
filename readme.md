To create this project 
    Step by step.
Steps:
    1. Create db.js with connection.
    2. Create models.
    3. Create controllers.
    4. Create routes.
    5. Create app.js

1. Db.js
* Create the connection pool with mysql.
        // db.js
const mysql = require('mysql2');

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test_user',
    password: 'password',
    connectionLimit: 10, // Adjust the connection limit based on your needs
});

// Export the pool to be used in other parts of the application
module.exports = pool;

2. Create the model for handling db call's and send the data to controllers.

* Here importing the db.js

// models/itemModel.js
const db = require('../db');

* Retrieve all items from the database
function getAllItems(callback) {
  db.query('SELECT * FROM items', (err, results) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, results);
  });
}

