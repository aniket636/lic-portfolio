const { pool } = require('../config/db');

// Fetch all insurance plans, most recently added first.
async function getAllPlans() {
  const [rows] = await pool.query(
    'SELECT id, name, description, benefits, eligibility FROM insurance_plans ORDER BY id ASC'
  );
  // MySQL JSON columns are auto-parsed by mysql2, but normalise just in case.
  return rows.map((row) => ({
    ...row,
    benefits: typeof row.benefits === 'string' ? JSON.parse(row.benefits) : row.benefits,
  }));
}

module.exports = { getAllPlans };
