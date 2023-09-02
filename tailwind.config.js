/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ['poppins', 'sans-serif'],
        monte: ['Montserrat:ital@1', 'sans-serif'],
        lobster:['Lobster', 'sans-serif'],
      }
    },
  },
  plugins: [],
}