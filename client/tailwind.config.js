/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{jsx, js}',
    './src/scenes/*.{jsx, js}',
    './src/components/*.{jsx, js}',
  ],
  theme: {
    extend: {
      colors: {
        'shark': '#333436',
      },
    },
  },
  plugins: [],
};

