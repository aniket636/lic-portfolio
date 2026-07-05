import axios from 'axios';

// Central Axios instance. In dev, Vite proxies /api to the Express server (see vite.config.js).
// In production, set VITE_API_BASE_URL to the deployed backend URL.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

export const fetchPlans = () => api.get('/plans');
export const fetchTestimonials = () => api.get('/testimonials');
export const submitContactForm = (payload) => api.post('/contact', payload);
export const calculatePremium = (payload) => api.post('/calculator', payload);

export default api;
