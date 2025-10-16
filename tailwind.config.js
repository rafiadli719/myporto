/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'ui-sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(14, 165, 233, 0.35)',
        soft: '0 35px 75px -35px rgba(15, 23, 42, 0.55)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(rgba(15, 23, 42, 0.08) 1px, transparent 0), linear-gradient(90deg, rgba(15, 23, 42, 0.08) 1px, transparent 0)',
        'grid-dark':
          'linear-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 0), linear-gradient(90deg, rgba(148, 163, 184, 0.12) 1px, transparent 0)',
      },
      backgroundSize: {
        grid: '36px 36px',
      },
      colors: {
        brand: {
          DEFAULT: '#0ea5e9',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
      },
    },
  },
  plugins: [],
}
