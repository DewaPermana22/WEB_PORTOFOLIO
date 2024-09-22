
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        'Baloo': ['Baloo_Bhaijaan'], 
        'Inter': ['Inter'], 
        'Poppins': ['Poppins'],
        'Roboto': ['Roboto'],
        'Roboto_bold': ['Roboto_Bold'],
        'Poppins_semibold': ['Poppins-Semi'],
        'Signika': ['Signika_Negative'],
        'Nunito' : ['Nunito']
      },
      borderWidth: {
        'custom-dashed': '2px dashed',
      },
      colors: {
        'custom-purple': '#6a1b9a',
        'custom-gray': '#333333',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), 
    require('@tailwindcss/typography'),
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        '.border-dasharray': {
          'border-style': 'dashed',
          'border-width': '2px',
          'border-dasharray': '10 20',
        },
      });
    },
  ],
}
