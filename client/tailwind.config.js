/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{jsx, js}',
    './src/scenes/*.{jsx, js}',
    './src/components/*.{jsx, js}',
    './node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'shark': '#333436',
        'sealBrown': '#253746',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};

