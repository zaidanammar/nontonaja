/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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