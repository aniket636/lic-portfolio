import { motion } from 'framer-motion';
import { FiShield, FiCalendar, FiTrendingUp } from 'react-icons/fi';
import { FaWhatsapp, FaUmbrella, FaHeartbeat, FaPiggyBank } from 'react-icons/fa';
import { useCountUp } from '../hooks/useCountUp';
import { ADVISOR } from '../utils/constants';

const stats = [
  { label: 'Policies Sold', value: 1200, suffix: '+' },
  { label: 'Happy Clients', value: 950, suffix: '+' },
  { label: 'Years Experience', value: 14, suffix: '' },
];

function Stat({ value, suffix, label }) {
  const [ref, count] = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl md:text-4xl font-bold text-white">
        {count}
        {suffix}
      </p>
      <p className="text-xs md:text-sm text-slate-200/80 mt-1">{label}</p>
    </div>
  );
}

const floatIcons = [
  { Icon: FaUmbrella, className: 'top-10 left-[8%]', delay: 0 },
  { Icon: FaHeartbeat, className: 'top-1/3 right-[10%]', delay: 1.2 },
  { Icon: FaPiggyBank, className: 'bottom-16 left-[15%]', delay: 0.6 },
  { Icon: FiShield, className: 'bottom-1/4 right-[20%]', delay: 1.8 },
];

export default function Hero() {
  const message = encodeURIComponent("Hello, I'd like a free consultation about LIC plans.");

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-10 lg:px-20 overflow-hidden bg-grad-primary"
    >
      {/* Ambient floating insurance icons */}
      {floatIcons.map(({ Icon, className, delay }, i) => (
        <motion.div
          key={i}
          className={`hidden md:flex absolute text-white/15 ${className}`}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon size={54} />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow !text-accent">Trusted LIC Insurance Advisor</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1]">
            Secure Your Family&rsquo;s Future with Trusted LIC Solutions
          </h1>
          <p className="mt-6 text-slate-100/90 text-base md:text-lg max-w-xl">
            Personalised life insurance, retirement, and investment guidance from {ADVISOR.name} —
            {' '}{ADVISOR.designation.toLowerCase()} with over a decade of experience protecting families
            across Rajasthan.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-secondary">
              Get Free Consultation
            </a>
            <a href="#calculator" className="btn-outline !text-white !border-white hover:!bg-white hover:!text-primary">
              <FiTrendingUp /> Calculate Premium
            </a>
            <a
              href={`https://wa.me/${ADVISOR.whatsapp}?text=${message}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 text-white font-semibold px-6 py-3 hover:bg-green-700 transition-colors"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </motion.div>

        {/* Right: advisor photo placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/20" />
            <div className="relative h-80 w-64 md:h-96 md:w-80 rounded-[2rem] bg-slate-200/90 flex items-center justify-center overflow-hidden shadow-2xl">
              {/* Replace this with a real advisor photo: /src/assets/advisor.jpg */}
              <span className="text-slate-400 font-medium text-sm">Advisor Photo</span>
            </div>
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl px-5 py-4 shadow-card flex items-center gap-3">
              <FiCalendar className="text-primary" size={20} />
              <div>
                <p className="text-xs text-ink/60">Consultation</p>
                <p className="text-sm font-semibold text-navy">Free & No Obligation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave divider into next section */}
      <svg
        className="absolute bottom-0 left-0 w-full text-surface dark:text-navy"
        viewBox="0 0 1440 100"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
}
