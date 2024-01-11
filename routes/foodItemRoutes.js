// foodItemRoutes.js
const express = require('express');
const router = express.Router();
const FoodItem = require('../models/foodItem');

// Create a new food item
router.post('/add-food', async (req, res) => {
  try {
    const { title, description, category, price, image } = req.body;
    const newFoodItem = new FoodItem({ title, description, category, price, image });
    const savedFoodItem = await newFoodItem.save();
    res.json(savedFoodItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all food items
router.get('/get-food', async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.json(foodItems);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get a specific food item by ID
router.get('/get-food/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id);
    if (!foodItem) {
      return res.status(404).json({ error: 'Food Item not found' });
    }
    res.json(foodItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a food item by ID
router.put('/update-food/:id', async (req, res) => {
  try {
    const { title, description, category, price, image } = req.body;
    const updatedFoodItem = await FoodItem.findByIdAndUpdate(
      req.params.id,
      { title, description, category, price, image },
      { new: true }
    );
    if (!updatedFoodItem) {
      return res.status(404).json({ error: 'Food Item not found' });
    }
    res.json(updatedFoodItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a food item by ID
router.delete('/delete-food/:id', async (req, res) => {
  try {
    const deletedFoodItem = await FoodItem.findByIdAndDelete(req.params.id);
    if (!deletedFoodItem) {
      return res.status(404).json({ error: 'Food Item not found' });
    }
    res.json(deletedFoodItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
