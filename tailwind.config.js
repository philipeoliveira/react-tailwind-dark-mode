/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            'my-blue-400': '#6495ed',
            'my-blue-600': '#4b6fb3',
            'my-gray-300': '#a7a7a7',
            'my-gray-950': '#0f0500',
         },
         fontFamily: {
            sans: 'KoHo',
         },
      },
   },
   plugins: [],
};
