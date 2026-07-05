const { pool } = require('../config/db');

// Fetch only published testimonials, newest first.
async function getPublishedTestimonials() {
  const [rows] = await pool.query(
    'SELECT id, name, role, rating, message FROM testimonials WHERE is_published = TRUE ORDER BY created_at DESC'
  );
  return rows;
}

module.exports = { getPublishedTestimonials };
