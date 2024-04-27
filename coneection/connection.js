const mongoose = require('mongoose');

// Replace 'YOUR_MONGODB_URI' with your actual MongoDB URI
const uri = 'mongodb+srv://akash:database@cluster0.bthvvqe.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
