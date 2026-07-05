import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { ADVISOR, NAV_LINKS } from '../utils/constants';

const socials = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
  { icon: FaWhatsapp, href: `https://wa.me/${ADVISOR.whatsapp}`, label: 'WhatsApp' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-slate-300">
      <div className="section !py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-xl text-white font-semibold mb-3">{ADVISOR.name}</h3>
          <p className="text-sm text-slate-400 mb-4">{ADVISOR.designation}</p>
          <p className="text-xs text-slate-500 font-mono">{ADVISOR.licCode}</p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.slice(0, 6).map((l) => (
              <li key={l.to}>
                <a href={`#${l.to}`} className="hover:text-accent transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {['Life Insurance', 'Term Insurance', 'Child Plans', 'Retirement Planning', 'Mutual Funds & SIP'].map(
              (s) => (
                <li key={s}>{s}</li>
              )
            )}
          </ul>
        </div>

        {/* Contact + social */}
        <div>
          <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone /> {ADVISOR.displayPhone}
            </li>
            <li className="flex items-center gap-2">
              <FiMail /> {ADVISOR.email}
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 shrink-0" /> {ADVISOR.address}
            </li>
          </ul>
          <div className="flex gap-3 mt-5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-navy transition-colors"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
        <p>© {year} {ADVISOR.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#privacy" className="hover:text-accent">Privacy Policy</a>
          <a href="#disclaimer" className="hover:text-accent">Disclaimer</a>
        </div>
      </div>
      <p className="text-center text-[11px] text-slate-600 pb-6 px-6">
        LIC is a registered trademark of Life Insurance Corporation of India. This is an independent advisor
        portfolio and not an official LIC website. Insurance is the subject matter of solicitation.
      </p>
    </footer>
  );
}
