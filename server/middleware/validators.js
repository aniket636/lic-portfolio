const { body, validationResult } = require('express-validator');

// Shared handler that short-circuits the request if validation failed.
function handleValidation(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
}

const contactValidationRules = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ max: 100 }),
  body('phone')
    .trim()
    .matches(/^[0-9]{10}$/)
    .withMessage('Phone must be a valid 10-digit number'),
  body('email').trim().isEmail().withMessage('A valid email is required'),
  body('message').trim().notEmpty().withMessage('Message cannot be empty').isLength({ max: 1000 }),
  handleValidation,
];

const calculatorValidationRules = [
  body('age').isInt({ min: 18, max: 65 }).withMessage('Age must be between 18 and 65'),
  body('term').isInt({ min: 5, max: 40 }).withMessage('Policy term must be between 5 and 40 years'),
  body('coverage').isFloat({ min: 100000 }).withMessage('Coverage must be at least ₹1,00,000'),
  body('mode')
    .isIn(['yearly', 'half-yearly', 'quarterly', 'monthly'])
    .withMessage('Invalid payment mode'),
  handleValidation,
];

module.exports = { contactValidationRules, calculatorValidationRules };
