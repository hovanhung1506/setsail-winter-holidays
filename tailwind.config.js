/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#3fd0d4',
      },
    },
    screens: {
      ex: '414px',
      xs: '481px',
      ...defaultTheme.screens,
      lg: '1025px',
    },
    fontFamily: {
      catamaran: ['Catamaran', 'sans-serif'],
      satisfy: ['Satisfy', 'san-serif'],
    },
  },
  plugins: [],
};
