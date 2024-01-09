const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const userRoutes = require('./routes/userRoute'); 
const app = express();
const PORT = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors());

// Include the connection file
require('./coneection/connection');

app.use(express.json());
app.use('/api/users', userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
