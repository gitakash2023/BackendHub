

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
