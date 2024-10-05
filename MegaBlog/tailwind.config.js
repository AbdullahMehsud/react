/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '30': '7.5rem', 
        '31': '7.75rem',
      },
    },
  },
  plugins: [],
}