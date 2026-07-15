import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { fetchTestimonials } from '../services/api';
import { FALLBACK_TESTIMONIALS } from '../utils/constants';

export default function Testimonials() {
  const [items, setItems] = useState(FALLBACK_TESTIMONIALS);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    fetchTestimonials()
      .then((res) => {
        if (mounted && Array.isArray(res.data) && res.data.length) setItems(res.data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const current = items[index];

  return (
    <section id="testimonials" className="section bg-white dark:bg-navy">
      <div className="max-w-3xl mx-auto text-center">
        <span className="section-eyebrow">Client Stories</span>
        <h2 className="section-title mb-12">Customer Testimonials</h2>

        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="card p-8 md:p-10"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    className={i < current?.rating ? 'text-accent fill-accent' : 'text-slate-300'}
                    size={18}
                  />
                ))}
              </div>
              <p className="text-ink/70 dark:text-slate-300 italic leading-relaxed mb-6">
                &ldquo;{current?.message}&rdquo;
              </p>
              <div className="h-12 w-12 rounded-full bg-primary/10 dark:bg-accent/10 mx-auto mb-3 flex items-center justify-center font-display font-semibold text-primary dark:text-accent">
                {current?.name?.charAt(0)}
              </div>
              <p className="font-semibold text-navy dark:text-white">{current?.name}</p>
              <p className="text-xs text-ink/50 dark:text-slate-400">{current?.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="h-10 w-10 rounded-full border border-primary/30 text-primary dark:text-accent flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="h-10 w-10 rounded-full border border-primary/30 text-primary dark:text-accent flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
