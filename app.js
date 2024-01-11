const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const userRoutes = require('./routes/userRoute'); 
const todoRoutes = require('./routes/todoRoutes');
const foodItemRoutes = require('./routes/foodItemRoutes');
const app = express();
const PORT = process.env.PORT || 10000;

// Enable CORS for all routes
app.use(cors());

// Include the connection file
require('./coneection/connection');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);
app.use('/api/fooditems', foodItemRoutes);
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
