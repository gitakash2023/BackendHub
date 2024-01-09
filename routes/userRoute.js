

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST route to save user data to MongoDB
router.post('/create-user', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET route to retrieve all users from MongoDB
router.get('/get-users', async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;
