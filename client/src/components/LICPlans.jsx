import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheckCircle, FiX } from 'react-icons/fi';
import { fetchPlans } from '../services/api';
import { FALLBACK_PLANS } from '../utils/constants';
import LoadingSpinner from './LoadingSpinner';

export default function LICPlans() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let mounted = true;
    fetchPlans()
      .then((res) => {
        if (mounted && Array.isArray(res.data) && res.data.length) setPlans(res.data);
        else if (mounted) setPlans(FALLBACK_PLANS);
      })
      .catch(() => mounted && setPlans(FALLBACK_PLANS))
      .finally(() => mounted && setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="plans" className="section bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">LIC Plans</span>
          <h2 className="section-title">Best LIC Insurance Plans</h2>
        </div>

        {loading ? (
          <LoadingSpinner label="Fetching latest plans..." />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.1 }}
                className="card p-7 flex flex-col"
              >
                <h3 className="font-display text-xl font-semibold text-navy dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-ink/60 dark:text-slate-400 mb-4 flex-1">{plan.description}</p>
                <p className="text-xs font-mono uppercase tracking-wide text-primary dark:text-accent mb-4">
                  Eligibility: {plan.eligibility}
                </p>
                <button onClick={() => setSelected(plan)} className="btn-outline w-full !py-2.5 text-sm">
                  Know More
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Details modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-navy/60 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-navy rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={`${selected.name} details`}
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-4 right-4 text-ink/50 hover:text-ink dark:text-slate-400"
              >
                <FiX size={20} />
              </button>
              <h3 className="font-display text-2xl font-semibold text-navy dark:text-white mb-2">
                {selected.name}
              </h3>
              <p className="text-sm text-ink/60 dark:text-slate-400 mb-5">{selected.description}</p>
              <h4 className="font-semibold text-navy dark:text-white mb-2 text-sm">Key Benefits</h4>
              <ul className="space-y-2 mb-5">
                {(selected.benefits || []).map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-ink/70 dark:text-slate-300">
                    <FiCheckCircle className="text-primary dark:text-accent shrink-0" /> {b}
                  </li>
                ))}
              </ul>
              <p className="text-xs font-mono uppercase text-primary dark:text-accent mb-6">
                Eligibility: {selected.eligibility}
              </p>
              <a href="#contact" onClick={() => setSelected(null)} className="btn-primary w-full">
                Enquire About This Plan
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
