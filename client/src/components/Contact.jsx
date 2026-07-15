import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiCheckCircle } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { submitContactForm } from '../services/api';
import { ADVISOR } from '../utils/constants';

const initialForm = { name: '', phone: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!/^[0-9]{10}$/.test(form.phone.trim())) errs.phone = 'Enter a valid 10-digit phone number';
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errs.email = 'Enter a valid email address';
    if (!form.message.trim()) errs.message = 'Please add a short message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      await submitContactForm(form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section bg-white dark:bg-navy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Contact Aniket Sharma</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="card p-8 space-y-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-navy dark:text-white mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy dark:text-white mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy dark:text-white mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-navy dark:text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-200 dark:border-white/10 dark:bg-white/5 dark:text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full">
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-sm text-green-600">
                <FiCheckCircle /> Thank you! Your message has been sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-500">Something went wrong. Please try again or contact directly.</p>
            )}
          </motion.form>

          {/* Map + quick contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-card h-64">
              <iframe
                title="Office location map"
                src={ADVISOR.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <a href={`tel:${ADVISOR.phone}`} className="card p-5 flex flex-col items-center text-center gap-2">
                <FiPhone className="text-primary dark:text-accent" size={22} />
                <span className="text-sm font-medium text-navy dark:text-white">Call</span>
                <span className="text-xs text-ink/50 dark:text-slate-400">{ADVISOR.displayPhone}</span>
              </a>
              <a href={`mailto:${ADVISOR.email}`} className="card p-5 flex flex-col items-center text-center gap-2">
                <FiMail className="text-primary dark:text-accent" size={22} />
                <span className="text-sm font-medium text-navy dark:text-white">Email</span>
                <span className="text-xs text-ink/50 dark:text-slate-400 break-all">{ADVISOR.email}</span>
              </a>
              <a
                href={`https://wa.me/${ADVISOR.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="card p-5 flex flex-col items-center text-center gap-2"
              >
                <FaWhatsapp className="text-green-600" size={22} />
                <span className="text-sm font-medium text-navy dark:text-white">WhatsApp</span>
                <span className="text-xs text-ink/50 dark:text-slate-400">Chat instantly</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
