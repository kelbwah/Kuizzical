/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/scenes/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "225":"225px",
        "300": "300px",
      }
    },
  },
  plugins: [],
}

