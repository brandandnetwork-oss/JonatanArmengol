export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B00', // Vibrant Orange
          hover: '#E65A00',
          light: '#FF8533',
        },
        secondary: '#1A1A1A', // Dark accents
        canvas: {
          light: '#FFF5EB', // Very light orange tint
          dark: '#120C0A',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1E1E1E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
