// controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authController = {};

authController.register = (req, res) => {
    const { username, password, phoneNumber } = req.body;
  
    if (!username || !password || !phoneNumber) {
      return res.status(400).json({ error: 'Please provide username, password, and phone number' });
    }
  
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      User.create(username, hashedPassword, phoneNumber, (err, userId) => {
        if (err) {
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        const token = jwt.sign({ userId }, 'your_secret_key', { expiresIn: '1h' });
        res.json({ token });
      });
    });
  };

authController.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Please provide username and password' });
  }

  User.findByUsername(username, (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }

      const token = jwt.sign({ userId: user.id }, 'your_secret_key', { expiresIn: '1h' });
      res.json({ token });
    });
  });
};

module.exports = authController;
