// app.js
const express = require('express');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/itemRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

// Middleware
app.use(bodyParser.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong.' });
});

// Routes
// user Routes
app.use('/user', userRoutes );

// item routes
app.use('/api', itemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
  console.log(`
   http://localhost:3000/api/items/
   http://localhost:3000/user/register/

   {
    "username": "adam",
    "password": "adam123",
    "phoneNumber": 12345
  }

   http://localhost:3000/user/login/
   {
    "password": "adam123",
    "phoneNumber": 12345
    }
  `);
});
