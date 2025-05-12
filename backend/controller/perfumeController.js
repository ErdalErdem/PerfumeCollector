// controllers/perfumeController.js
const Perfume = require('../models/perfumeModel');

/**
 * @desc    Fetch all perfumes
 * @route   GET /api/perfumes
 * @access  Public
 */
exports.getPerfumes = async (req, res, next) => {
  try {
    const perfumes = await Perfume.find();
    res.json(perfumes);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create a new perfume
 * @route   POST /api/perfumes
 * @access  Public
 */
exports.createPerfume = async (req, res, next) => {
  try {
    const { name, brand, year, notes, rating } = req.body;
    const newPerfume = new Perfume({ name, brand, year, notes, rating });
    const createdPerfume = await newPerfume.save();
    res.status(201).json(createdPerfume);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Fetch a perfume by ID
 * @route   GET /api/perfumes/:id
 * @access  Public
 */
exports.getPerfumeById = async (req, res, next) => {
  try {
    const perfume = await Perfume.findById(req.params.id);
    if (!perfume) {
      res.status(404);
      throw new Error('Perfume not found');
    }
    res.json(perfume);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update an existing perfume
 * @route   PUT /api/perfumes/:id
 * @access  Public
 */
exports.updatePerfume = async (req, res, next) => {
  try {
    const { name, brand, year, notes, rating } = req.body;
    const perfume = await Perfume.findById(req.params.id);
    if (!perfume) {
      res.status(404);
      throw new Error('Perfume not found');
    }
    perfume.name = name !== undefined ? name : perfume.name;
    perfume.brand = brand !== undefined ? brand : perfume.brand;
    perfume.year = year !== undefined ? year : perfume.year;
    perfume.notes = notes !== undefined ? notes : perfume.notes;
    perfume.rating = rating !== undefined ? rating : perfume.rating;

    const updatedPerfume = await perfume.save();
    res.json(updatedPerfume);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete a perfume
 * @route   DELETE /api/perfumes/:id
 * @access  Public
 */
exports.deletePerfume = async (req, res, next) => {
  try {
    const perfume = await Perfume.findById(req.params.id);
    if (!perfume) {
      res.status(404);
      throw new Error('Perfume not found');
    }
    await perfume.remove();
    res.json({ message: 'Perfume removed' });
  } catch (error) {
    next(error);
  }
};
