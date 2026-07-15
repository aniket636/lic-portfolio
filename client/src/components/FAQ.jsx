import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    q: 'How do I choose the right LIC plan for my needs?',
    a: 'It depends on your goals — pure protection, savings, child education, or retirement. I assess your income, dependents and timeline before recommending a plan.',
  },
  {
    q: 'Can I pay premiums monthly instead of yearly?',
    a: 'Yes, most LIC plans support monthly, quarterly, half-yearly and yearly payment modes, though yearly usually works out most economical.',
  },
  {
    q: 'What documents are required to buy a policy?',
    a: 'Typically identity proof, address proof, age proof, income proof (for high cover) and a recent photograph. I help you complete this end-to-end.',
  },
  {
    q: 'How does claim assistance work?',
    a: 'I personally guide your family through the documentation and follow up with the LIC branch until the claim is settled.',
  },
  {
    q: 'Is investing in LIC Mutual Fund safe?',
    a: 'Mutual funds are market-linked and carry risk, but LIC Mutual Fund is managed by experienced professionals with diversified fund options to match your risk appetite.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section bg-surface dark:bg-slate-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-navy dark:text-white">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-primary dark:text-accent shrink-0"
                  >
                    <FiChevronDown size={20} />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-ink/60 dark:text-slate-400 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
