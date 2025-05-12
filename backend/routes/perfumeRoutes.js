// routes/perfumeRoutes.js
const express = require('express');
const router = express.Router();
const {
  getPerfumes,
  createPerfume,
  getPerfumeById,
  updatePerfume,
  deletePerfume
} = require('../controllers/perfumeController');

/**
 * @route   GET /api/perfumes
 * @desc    Fetch all perfumes
 * @access  Public
 */
router.get('/', getPerfumes);

/**
 * @route   POST /api/perfumes
 * @desc    Create a new perfume
 * @access  Public
 */
router.post('/', createPerfume);

/**
 * @route   GET /api/perfumes/:id
 * @desc    Fetch a single perfume by ID
 * @access  Public
 */
router.get('/:id', getPerfumeById);

/**
 * @route   PUT /api/perfumes/:id
 * @desc    Update an existing perfume
 * @access  Public
 */
router.put('/:id', updatePerfume);

/**
 * @route   DELETE /api/perfumes/:id
 * @desc    Delete a perfume
 * @access  Public
 */
router.delete('/:id', deletePerfume);

module.exports = router;
