// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;



app.use('/api', authRoutes);
app.use('/api', orderRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
