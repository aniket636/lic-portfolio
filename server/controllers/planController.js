const { getAllPlans } = require('../models/planModel');

// GET /api/plans
async function getPlans(req, res, next) {
  try {
    const plans = await getAllPlans();
    res.status(200).json(plans);
  } catch (err) {
    next(err);
  }
}

module.exports = { getPlans };
