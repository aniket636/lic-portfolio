const { pool } = require('../config/db');

// Insert a new contact form submission.
async function createContactMessage({ name, phone, email, message }) {
  const [result] = await pool.query(
    'INSERT INTO contact_messages (name, phone, email, message) VALUES (?, ?, ?, ?)',
    [name, phone, email, message]
  );
  return { id: result.insertId, name, phone, email, message };
}

module.exports = { createContactMessage };
