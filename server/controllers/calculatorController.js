// Illustrative premium estimation logic.
// NOTE: This is a simplified formula for demo purposes only — it does NOT reflect
// actual LIC actuarial tables. Replace with real plan-wise rate tables in production.
const PAYMENT_MODE_FACTORS = {
  yearly: 1,
  'half-yearly': 0.51,
  quarterly: 0.26,
  monthly: 0.0875,
};

function estimateAnnualPremium({ age, term, coverage }) {
  const ageFactor = 1 + Math.max(0, age - 25) * 0.018;
  const termFactor = Math.max(0.6, 1.4 - term * 0.012);
  const base = (coverage / 1000) * 2.2 * ageFactor * termFactor;
  return Math.max(base, 500);
}

// POST /api/calculator
function calculatePremium(req, res, next) {
  try {
    const { age, term, coverage, mode } = req.body;
    const annual = estimateAnnualPremium({ age: Number(age), term: Number(term), coverage: Number(coverage) });
    const factor = PAYMENT_MODE_FACTORS[mode] ?? 1;
    const premium = Math.round(annual * factor);

    res.status(200).json({
      success: true,
      premium,
      mode,
      disclaimer: 'This is an indicative estimate only. Actual premium depends on the chosen plan and underwriting.',
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { calculatePremium };
