const express = require('express');
const router = express.Router();
const { calculatePremium } = require('../controllers/calculatorController');
const { calculatorValidationRules } = require('../middleware/validators');

// POST /api/calculator
router.post('/', calculatorValidationRules, calculatePremium);

module.exports = router;
