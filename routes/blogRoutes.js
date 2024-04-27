// routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Create a blog
router.post('/createBlog', async (req, res) => {
  try {
    const { title} = req.body;
    const newBlog = new Blog({ title});
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read all blogs
router.get('/get-all-blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Read a single blog by ID
router.get('/get-blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update a blog
router.put('/update-blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(200).json(updatedBlog);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a blog
router.delete('/delete-blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.status(204).send(); // No Content
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
