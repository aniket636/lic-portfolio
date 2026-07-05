import { FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { ADVISOR } from '../utils/constants';

// Mobile-only sticky call-to-action bar fixed to the bottom of the viewport.
export default function StickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 grid grid-cols-2 bg-white dark:bg-navy border-t border-slate-200 dark:border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a href={`tel:${ADVISOR.phone}`} className="flex items-center justify-center gap-2 py-3 text-primary dark:text-accent font-semibold text-sm border-r border-slate-200 dark:border-white/10">
        <FiPhoneCall /> Call Now
      </a>
      <a
        href={`https://wa.me/${ADVISOR.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-2 py-3 text-green-600 font-semibold text-sm"
      >
        <FaWhatsapp /> WhatsApp
      </a>
    </div>
  );
}
