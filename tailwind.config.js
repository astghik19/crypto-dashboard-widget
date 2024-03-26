/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          '300': 'rgb(0 0 0 / 30%)'
        }
      }
    },
  },
  plugins: [],
}