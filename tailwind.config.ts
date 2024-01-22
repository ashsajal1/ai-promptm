/** @type {import('tailwindcss').Config} */
import { blue, gray, slate, violet } from 'tailwindcss/colors';
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: violet[600],
        primaryHigh: violet[700],
        secondary: blue[600],
        light: slate[50],
        dark: gray[700],
      },
      animation: {
        blob: 'blob 12s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translateX(0)',
          },
          '33%': {
            transform: 'translateX(50%)',
          },
          '66%': {
            transform: 'translateX(-10%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
