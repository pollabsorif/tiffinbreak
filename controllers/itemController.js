const itemModel = require('../models/itemModel');

// Get all items
async function getAllItems(req, res) {
  try {
    const items = await itemModel.getAllItems();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving items from the database.' });
  }
}

// Create a new item
async function createItem(req, res) {
  const newItem = {
    name: req.body.name,
    description: req.body.description,
  };
  try {
    const itemId = await itemModel.createItem(newItem);
    res.json({ id: itemId, ...newItem });
  } catch (err) {
    res.status(500).json({ error: 'Error creating the item.' });
  }
}

// Get a specific item by ID
async function getItemById(req, res) {
  const itemId = req.params.id;
  try {
    const item = await itemModel.getItemById(itemId);
    res.json(item);
  } catch (err) {
    res.status(404).json({ error: 'Item not found.' });
  }
}

// Update an item
async function updateItem(req, res) {
  const itemId = req.params.id;
  const updatedItem = {
    name: req.body.name,
    description: req.body.description,
  };
  try {
    const success = await itemModel.updateItem(itemId, updatedItem);
    if (!success) {
      return res.status(404).json({ error: 'Item not found.' });
    }
    res.json({ id: itemId, ...updatedItem });
  } catch (err) {
    res.status(500).json({ error: 'Error updating the item.' });
  }
}

// Delete an item
async function deleteItem(req, res) {
  const itemId = req.params.id;
  try {
    const success = await itemModel.deleteItem(itemId);
    if (!success) {
      return res.status(404).json({ error: 'Item not found.' });
    }
    res.json({ message: 'Item deleted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting the item.' });
  }
}

module.exports = {
  getAllItems,
  createItem,
  getItemById,
  updateItem,
  deleteItem,
};
