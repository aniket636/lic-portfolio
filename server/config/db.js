const mysql = require('mysql2/promise');
require('dotenv').config();

// Connection pool for MySQL — reused across all queries for performance.
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'lic_portfolio',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Simple helper to verify the DB connection at startup.
async function testConnection() {
  try {
    const conn = await pool.getConnection();
    console.log('✅ MySQL connected successfully');
    conn.release();
  } catch (err) {
    console.error('❌ MySQL connection failed:', err.message);
  }
}

module.exports = { pool, testConnection };
