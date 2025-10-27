/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-dark': 'rgba(0, 0, 0, 0.1)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
