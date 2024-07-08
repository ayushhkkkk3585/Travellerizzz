/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "img":"url(/src/assets/bg.webp)"
      }
      
    },
  },
  plugins: [],
}