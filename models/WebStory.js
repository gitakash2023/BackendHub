const mongoose = require('mongoose');

const WebStorySchema = new mongoose.Schema({
  title: String,
  content: String,
  category: String,
  image: String,
  video: String,
});

module.exports = mongoose.model('WebStory', WebStorySchema);
