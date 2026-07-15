import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiCheckCircle } from 'react-icons/fi';
import { useCountUp } from '../hooks/useCountUp';

const statCards = [
  { label: 'Policies Sold', value: 400, suffix: '+' },
  { label: 'Happy Clients', value: 400, suffix: '+' },
  { label: 'Claims Assisted', value: 400, suffix: '+' },
  { label: 'Years of Experience', value: 5, suffix: '' },
];

const whyChooseMe = [
  'Certified & IRDAI registered advisor',
  'Personalised, needs-based recommendations',
  'End-to-end claim settlement assistance',
  'Transparent advice, no hidden pressure',
];

function StatCard({ value, suffix, label }) {
  const [ref, count] = useCountUp(value);
  return (
    <div ref={ref} className="card p-6 text-center">
      <p className="font-display text-3xl font-bold text-primary dark:text-accent">
        {count}
        {suffix}
      </p>
      <p className="text-sm text-ink/60 dark:text-slate-300 mt-1">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">About Me</span>
          <h2 className="section-title mb-6">About Aniket Sharma</h2>
          <p className="text-ink/70 dark:text-slate-300 leading-relaxed mb-6">
            With over a decade in the insurance industry, I help individuals and families in Rajasthan
            plan for life&rsquo;s uncertainties with the right mix of protection, savings and investment.
            My approach starts with understanding your goals — not pushing a product.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-8">
            <div className="flex gap-3">
              <FiTarget className="text-primary dark:text-accent shrink-0 mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-navy dark:text-white">Mission</h4>
                <p className="text-sm text-ink/60 dark:text-slate-400">
                  Make financial protection simple, honest and accessible for every family.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <FiEye className="text-primary dark:text-accent shrink-0 mt-1" size={22} />
              <div>
                <h4 className="font-semibold text-navy dark:text-white">Vision</h4>
                <p className="text-sm text-ink/60 dark:text-slate-400">
                  To be the most trusted advisor name in every household I serve.
                </p>
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-navy dark:text-white mb-3">Why Choose Me</h4>
          <ul className="space-y-2">
            {whyChooseMe.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink/70 dark:text-slate-300">
                <FiCheckCircle className="text-primary dark:text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-5"
        >
          {statCards.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
