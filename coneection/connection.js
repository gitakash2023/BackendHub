const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://akash:database@cluster0.bthvvqe.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
  