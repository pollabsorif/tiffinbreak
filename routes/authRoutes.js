// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const orderController = require('../controllers/orderController');


router.post('/register', authController.register);
router.post('/login', authController.login);

// router.post('/orders', orderController.create);
// router.get('/orders/:userId', orderController.getAllByUser);

module.exports = router;
