import { motion } from 'framer-motion';
import {
  FaUserShield,
  FaFileContract,
  FaChild,
  FaUmbrellaBeach,
  FaCoins,
  FaPiggyBank,
  FaHeartbeat,
  FaHandHoldingUsd,
  FaChartLine,
  FaCalendarCheck,
} from 'react-icons/fa';

const services = [
  { icon: FaUserShield, title: 'Life Insurance', desc: 'Comprehensive life cover to protect your family financially.' },
  { icon: FaFileContract, title: 'Term Insurance', desc: 'High cover, low premium plans for pure financial protection.' },
  { icon: FaChild, title: 'Child Plans', desc: "Secure your child's education and future milestones." },
  { icon: FaUmbrellaBeach, title: 'Retirement Planning', desc: 'Build a corpus for a comfortable, worry-free retirement.' },
  { icon: FaPiggyBank, title: 'Pension Plans', desc: 'Guaranteed regular income after your working years.' },
  { icon: FaCoins, title: 'Tax Saving Plans', desc: 'Optimise savings with policies eligible under Section 80C.' },
  { icon: FaHeartbeat, title: 'Health Riders', desc: 'Add critical illness & accident cover to your base policy.' },
  { icon: FaHandHoldingUsd, title: 'Money Back Plans', desc: 'Periodic payouts during the policy term plus maturity benefit.' },
  { icon: FaChartLine, title: 'LIC Mutual Fund', desc: 'Grow wealth through professionally managed mutual funds.' },
  { icon: FaCalendarCheck, title: 'SIP Investment', desc: 'Start disciplined, long-term wealth creation with SIPs.' },
];

export default function Services() {
  return (
    <section id="services" className="section bg-surface dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">What I Offer</span>
          <h2 className="section-title">LIC Insurance Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (i % 5) * 0.08 }}
              whileHover={{ y: -8 }}
              className="card p-6 group cursor-default"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-grad-primary transition-colors duration-300">
                <Icon className="text-primary dark:text-accent group-hover:text-white transition-colors duration-300" size={20} />
              </div>
              <h3 className="font-semibold text-navy dark:text-white mb-2">{title}</h3>
              <p className="text-sm text-ink/60 dark:text-slate-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
