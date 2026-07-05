const { createContactMessage } = require('../models/contactModel');
const { sendContactNotification } = require('../services/emailService');

// POST /api/contact
async function submitContact(req, res, next) {
  try {
    const { name, phone, email, message } = req.body;
    const saved = await createContactMessage({ name, phone, email, message });

    // Fire-and-forget email notification; failure here should not block the API response.
    sendContactNotification({ name, phone, email, message }).catch((err) =>
      console.error('Email notification failed:', err.message)
    );

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. We will get back to you shortly.',
      data: saved,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { submitContact };
