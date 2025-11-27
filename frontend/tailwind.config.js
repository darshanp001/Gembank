/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gembank: {
          navy: '#2C3E50',
          charcoal: '#1a1a2e',
          gold: {
            DEFAULT: '#D4AF37',
            light: '#F4E4C1',
            dark: '#B8941F',
          },
          purple: '#6C63FF',
          green: '#4CAF50',
          blue: '#5B9BD5',
          teal: '#26C6DA',
          red: '#EF5350',
          gray: {
            50: '#F8F9FA',
            100: '#F1F3F5',
            200: '#E9ECEF',
            300: '#DEE2E6',
            800: '#495057',
            900: '#212529',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        gold: '0 4px 14px 0 rgba(212, 175, 55, 0.39)',
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse-arrow': {
          '0%, 100%': { transform: 'rotate(90deg) scale(1)' },
          '50%': { transform: 'rotate(90deg) scale(1.05)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-arrow': 'pulse-arrow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
