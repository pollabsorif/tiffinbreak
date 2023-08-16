// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// // Get all items
// router.get('/items', itemController.getAllItems);

// // Create a new item
// router.post('/items', itemController.createItem);

// // Get a specific item by ID
// router.get('/items/:id', itemController.getItemById);

// // Update an item
// router.put('/items/:id', itemController.updateItem);

// // Delete an item
// router.delete('/items/:id', itemController.deleteItem);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
