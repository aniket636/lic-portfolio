const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const { testConnection } = require('./config/db');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const planRoutes = require('./routes/planRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const contactRoutes = require('./routes/contactRoutes');
const calculatorRoutes = require('./routes/calculatorRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// --- Global middleware ---
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || '*' }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Health check ---
app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'LIC Portfolio API is running' });
});

// --- API routes ---
app.use('/api/plans', planRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/calculator', calculatorRoutes);

// --- 404 + error handling (must be last) ---
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  testConnection();
});
