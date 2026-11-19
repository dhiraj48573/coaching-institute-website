/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          'primary-dark': 'var(--brand-primary-dark)',
          'primary-light': 'var(--brand-primary-light)',
          secondary: 'var(--brand-secondary)',
          accent: 'var(--brand-accent)',
          'accent-hover': 'var(--brand-accent-hover)',
          'accent-soft': 'var(--brand-accent-soft)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 20px 30px -4px rgba(15, 23, 42, 0.12), 0 8px 12px -2px rgba(15, 23, 42, 0.06)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-gentle': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
};
