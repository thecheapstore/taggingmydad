/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0F172A',
          dark: '#0A0F1E',
          light: '#1E293B',
        },
        teal: {
          DEFAULT: '#00E5C3',
          light: '#14F1D9',
          glow: '#0BD6B4',
        },
      },
    },
  },
  plugins: [],
};
