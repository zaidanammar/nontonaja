/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        background: '#09090A',
        primary: '#D0071E',
      },
      container: {
        padding: '1rem',
        screens: {
          lg: '1208px',
        }
      },
    },
  },
  plugins: [],
}