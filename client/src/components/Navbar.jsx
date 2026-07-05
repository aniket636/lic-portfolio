import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { NAV_LINKS, ADVISOR } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';

// Smoothly scrolls to a section by id, accounting for the sticky navbar height.
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 80;
  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-navy/90 backdrop-blur-md shadow-card py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-20" aria-label="Main navigation">
        {/* Brand */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 font-display text-xl md:text-2xl font-bold text-primary dark:text-white"
        >
          <span className="h-12 w-12 rounded-full bg-[#FFFF00] flex items-center justify-center text-navy text-sm font-bold shadow-glow">
          LIC
          </span>
          {ADVISOR.name}
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-7 font-medium text-sm text-ink dark:text-slate-200">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => handleNavClick(link.to)}
                className="relative py-1 hover:text-primary dark:hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary dark:after:bg-accent hover:after:w-full after:transition-all"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="h-10 w-10 rounded-full flex items-center justify-center text-primary dark:text-accent border border-primary/20 dark:border-white/20 hover:bg-primary/10 dark:hover:bg-white/10 transition-colors"
          >
            {isDark ? <MdOutlineLightMode size={18} /> : <MdOutlineDarkMode size={18} />}
          </button>
          <a href={`tel:${ADVISOR.phone}`} className="btn-outline !px-4 !py-2 text-sm">
            <FiPhoneCall /> Call Now
          </a>
          <a
            href={`https://wa.me/${ADVISOR.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary !px-4 !py-2 text-sm !bg-none !bg-green-600 hover:!bg-green-700"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-2xl text-primary dark:text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-navy shadow-card"
          >
            <ul className="flex flex-col px-6 py-4 gap-1 font-medium text-ink dark:text-slate-200">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => handleNavClick(link.to)}
                    className="w-full text-left py-3 border-b border-slate-100 dark:border-white/10 hover:text-primary dark:hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 px-6 pb-6">
              <a href={`tel:${ADVISOR.phone}`} className="btn-outline flex-1 !py-2 text-sm">
                <FiPhoneCall /> Call
              </a>
              <a
                href={`https://wa.me/${ADVISOR.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-green-600 text-white font-semibold py-2 text-sm"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
