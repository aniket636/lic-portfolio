const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');
const { contactValidationRules } = require('../middleware/validators');

// POST /api/contact
router.post('/', contactValidationRules, submitContact);

module.exports = router;
