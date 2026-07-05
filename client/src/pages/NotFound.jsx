import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHome } from 'react-icons/fi';

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-surface dark:bg-navy">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-8xl font-bold text-primary dark:text-accent mb-4"
      >
        404
      </motion.p>
      <h1 className="text-2xl font-semibold text-navy dark:text-white mb-3">Page not found</h1>
      <p className="text-ink/60 dark:text-slate-400 mb-8 max-w-sm">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link to="/" className="btn-primary">
        <FiHome /> Back to Home
      </Link>
    </section>
  );
}
