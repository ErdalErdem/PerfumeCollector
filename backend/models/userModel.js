// models/userModel.js
const mongoose = require('mongoose');

/**
 * User Schema
 * name       : String, required
 * email      : String, required, unique
 * password   : String, required (hashed)
 * isAdmin    : Boolean, default false
 * createdAt  : Date, defaults to now
 */
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);

