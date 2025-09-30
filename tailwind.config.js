// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./main.jsx",
    "./index.css"
    // Add other paths where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}