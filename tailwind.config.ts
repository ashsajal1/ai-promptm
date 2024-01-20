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
    },
  },
  plugins: [],
};
