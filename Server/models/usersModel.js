const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  number: {
    type: String,
    required: true,
    max: 10,
  },
  email:{
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  address:{
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('User', userSchema);

