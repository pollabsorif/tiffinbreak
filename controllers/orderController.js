// controllers/orderController.js
const Order = require('../models/Order');

const orderController = {};

// create order
orderController.create = (req, res) => {
    const { user_id, food_item, quantity } = req.body;
    if (!user_id || !food_item || !quantity) {
      return res.status(400).json({ error: 'Please provide user_id, food_item, and quantity' });
    }
  
    Order.create(user_id, food_item, quantity, (err, orderId) => {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }
  
      res.json({ orderId });
    });
  };

orderController.getAllByUser = (req, res) => {
  const userId = req.params.userId;

  Order.getAllByUser(userId, (err, orders) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error' });
    }

    res.json({ orders });
  });
};

module.exports = orderController;
