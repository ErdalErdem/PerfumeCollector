// models/perfumeModel.js
const mongoose = require('mongoose');

/**
 * Perfume Schema
 * name     : String, required
 * brand    : String, required
 * year     : Number, optional (year of release)
 * notes    : [String], optional (scent notes like "vanilla", "jasmine")
 * rating   : Number, optional (0–5 scale)
 * createdAt: Date, defaults to now
 */
const perfumeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    min: 0
  },
  notes: {
    type: [String],
    default: []
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export the Perfume model
module.exports = mongoose.model('Perfume', perfumeSchema);
