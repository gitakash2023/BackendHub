const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 

const todoRoutes = require('./routes/todoRoutes');
const blogRoutes = require('./routes/blogRoutes');
const webStoryRoutes = require('./routes/webStoryRoutes')


const app = express();
const PORT = process.env.PORT || 50000;

// Enable CORS for all routes
app.use(cors());

// Include the connection file
require('./coneection/connection');

app.use(express.json());

app.use('/api/todos', todoRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/webstories', webStoryRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
