import { motion } from 'framer-motion';
import { FiTrendingUp, FiShield, FiLayers, FiPercent } from 'react-icons/fi';

const fundTypes = [
  { icon: FiTrendingUp, title: 'Equity Funds', desc: 'High growth potential for long-term wealth creation.' },
  { icon: FiLayers, title: 'Hybrid Funds', desc: 'Balanced mix of equity and debt for moderate risk appetite.' },
  { icon: FiShield, title: 'Debt Funds', desc: 'Stable, lower-risk returns ideal for short-term goals.' },
  { icon: FiPercent, title: 'ELSS', desc: 'Tax-saving mutual funds with the shortest 3-year lock-in.' },
];

const benefits = [
  'Start SIP with as little as ₹500/month',
  'Professionally managed by LIC Mutual Fund AMC',
  'Power of compounding over the long term',
  'Diversified portfolio to manage risk',
];

export default function MutualFund() {
  return (
    <section id="mutual-fund" className="section bg-grad-primary text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow !text-accent">LIC Mutual Fund</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5">
            Grow your wealth alongside your protection
          </h2>
          <p className="text-slate-100/90 mb-6 leading-relaxed">
            Beyond insurance, I help clients build long-term wealth through SIPs and mutual funds —
            structured around your goals, timeline and risk appetite.
          </p>
          <ul className="space-y-3 mb-8">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-slate-100/90">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {b}
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-secondary">
            Start Your SIP Journey
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-5"
        >
          {fundTypes.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass rounded-2xl p-6">
              <Icon className="text-accent mb-3" size={26} />
              <h3 className="font-semibold mb-1">{title}</h3>
              <p className="text-xs text-slate-100/80 leading-relaxed">{desc}</p>
            </div>
          ))}

          {/* Simple chart placeholder illustrating growth trend */}
          <div className="col-span-2 glass rounded-2xl p-6">
            <p className="text-xs font-mono uppercase tracking-wide text-slate-200/70 mb-3">
              Illustrative SIP Growth (for representation only)
            </p>
            <svg viewBox="0 0 300 100" className="w-full h-24">
              <polyline
                fill="none"
                stroke="#FFD200"
                strokeWidth="3"
                points="0,90 40,80 80,75 120,55 160,50 200,30 240,25 300,5"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
