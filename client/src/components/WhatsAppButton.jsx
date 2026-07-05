import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ADVISOR } from '../utils/constants';

// Persistent floating WhatsApp click-to-chat button, visible on every page.
export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello, I'd like to know more about LIC insurance plans."
  );

  return (
    <motion.a
      href={`https://wa.me/${ADVISOR.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 left-6 z-40 h-14 w-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-2xl shadow-green-600/40"
    >
      <FaWhatsapp size={28} />
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
    </motion.a>
  );
}
