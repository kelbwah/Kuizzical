/** @type {import('tailwindcss').Config} */

export default {
    content: [
        './index.html',
        './src/*.{jsx, js}',
        './src/scenes/*.{jsx, js}',
        './src/components/*.{jsx, js}',
        './src/components/body-components/*.{jsx, js}',
        './node_modules/flowbite-react/lib/esm/**/*.js',
        './node_modules/flowbite-react/lib/cjs/**/*.js'
    ],
    theme: {
        screens: {
            sm: '400px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                shark: '#333436',
                blueWood: '#253746',
                easternBlue: '#618098'
            },
            screens: {
                // Any NEW screen breakpoints
            }
        }
    },
    plugins: [require('flowbite/plugin')]
};
