/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ec6d13',
        'background-light': '#f8f7f6',
        'background-dark': '#221810',
        'dark-accent': '#181411',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
