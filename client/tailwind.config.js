/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#005BAC',
          light: '#1E7FD8',
          dark: '#003E77',
        },
        accent: {
          DEFAULT: '#FFD200',
          dark: '#E6BD00',
        },
        navy: '#0F172A',
        surface: '#F8FAFC',
        ink: '#1E293B',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(15, 23, 42, 0.15)',
        glow: '0 0 40px -8px rgba(0, 91, 172, 0.35)',
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #005BAC 0%, #003E77 100%)',
        'grad-gold': 'linear-gradient(135deg, #FFD200 0%, #E6BD00 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        wave: {
          '0%': { backgroundPositionX: '0' },
          '100%': { backgroundPositionX: '1000px' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        wave: 'wave 20s linear infinite',
      },
    },
  },
  plugins: [],
};
