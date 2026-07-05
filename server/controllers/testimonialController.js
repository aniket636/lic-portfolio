const { getPublishedTestimonials } = require('../models/testimonialModel');

// GET /api/testimonials
async function getTestimonials(req, res, next) {
  try {
    const testimonials = await getPublishedTestimonials();
    res.status(200).json(testimonials);
  } catch (err) {
    next(err);
  }
}

module.exports = { getTestimonials };
