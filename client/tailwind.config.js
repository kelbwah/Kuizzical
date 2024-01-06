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
        "225": "225px",
        "250": "250px",
        "300": "300px",
        "350": "350px",
        "375": "375px",
        "400": "400px",
        "450": "450px",
      },
      colors: {
        "link-water": "#dde2f8",
      }
    },
  },
  plugins: [],
}

