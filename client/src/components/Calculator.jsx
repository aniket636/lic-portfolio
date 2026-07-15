import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { calculatePremium } from '../services/api';

const paymentModes = [
  { label: 'Yearly', value: 'yearly', factor: 1 },
  { label: 'Half-Yearly', value: 'half-yearly', factor: 0.51 },
  { label: 'Quarterly', value: 'quarterly', factor: 0.26 },
  { label: 'Monthly', value: 'monthly', factor: 0.0875 },
];

// Simple illustrative estimation formula (NOT an actual LIC actuarial rate).
// Real premium should always be confirmed with an official LIC quotation.
function estimatePremium({ age, term, coverage }) {
  const ageFactor = 1 + Math.max(0, age - 25) * 0.018;
  const termFactor = Math.max(0.6, 1.4 - term * 0.012);
  const base = (coverage / 1000) * 2.2 * ageFactor * termFactor;
  return Math.max(base, 500);
}

export default function Calculator() {
  const [age, setAge] = useState(30);
  const [term, setTerm] = useState(20);
  const [coverage, setCoverage] = useState(1000000);
  const [mode, setMode] = useState('yearly');
  const [serverResult, setServerResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const localAnnual = useMemo(() => estimatePremium({ age, term, coverage }), [age, term, coverage]);
  const selectedFactor = paymentModes.find((m) => m.value === mode)?.factor ?? 1;
  const premium = serverResult ?? localAnnual * selectedFactor;

  const handleCalculate = async () => {
    setLoading(true);
    try {
      const res = await calculatePremium({ age, term, coverage, mode });
      if (res.data?.premium) setServerResult(res.data.premium);
      else setServerResult(null);
    } catch {
      setServerResult(null); // fall back silently to local estimate
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="calculator" className="section bg-surface dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">Premium Calculator</span>
          <h2 className="section-title">LIC Premium Calculator</h2>
          <p className="text-ink/60 dark:text-slate-400 mt-4 text-sm">
            This is an indicative estimate only. Actual premium depends on the chosen plan and underwriting.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl shadow-card grid md:grid-cols-2 overflow-hidden"
        >
          {/* Inputs — ledger style */}
          <div className="p-8 md:p-10 bg-white/60 dark:bg-navy/40 space-y-7">
            <div>
              <div className="flex justify-between text-sm font-medium text-navy dark:text-white mb-2">
                <span>Age</span>
                <span className="font-mono text-primary dark:text-accent">{age} yrs</span>
              </div>
              <input
                type="range"
                min="18"
                max="65"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium text-navy dark:text-white mb-2">
                <span>Policy Term</span>
                <span className="font-mono text-primary dark:text-accent">{term} yrs</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium text-navy dark:text-white mb-2">
                <span>Coverage Amount</span>
                <span className="font-mono text-primary dark:text-accent">
                  ₹{coverage.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="20000000"
                step="100000"
                value={coverage}
                onChange={(e) => setCoverage(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div>
              <p className="text-sm font-medium text-navy dark:text-white mb-2">Payment Mode</p>
              <div className="grid grid-cols-2 gap-2">
                {paymentModes.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setMode(m.value)}
                    className={`text-xs font-semibold py-2 rounded-lg border transition-colors ${
                      mode === m.value
                        ? 'bg-primary text-white border-primary'
                        : 'border-primary/30 text-primary dark:text-accent dark:border-accent/30'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result panel */}
          <div className="p-8 md:p-10 bg-navy text-white flex flex-col justify-center">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3">
              Estimated Premium
            </p>
            <p className="font-display text-4xl md:text-5xl font-bold mb-1">
              ₹{Math.round(premium).toLocaleString('en-IN')}
            </p>
            <p className="text-sm text-slate-300 mb-8 capitalize">{mode.replace('-', ' ')} payment</p>

            <button onClick={handleCalculate} disabled={loading} className="btn-secondary w-full mb-3">
              {loading ? 'Calculating...' : 'Get Accurate Quote'}
            </button>
            <a href="#contact" className="btn-outline !text-white !border-white/40 w-full hover:!bg-white hover:!text-navy">
              <FiSend size={14} /> Talk to Advisor
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
