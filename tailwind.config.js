/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,mode: 'jit',jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'up-bg' : "url('./public/images/more/15.jpg')",
        'footer-bg' : "url('./public/images/more/13.jpg')",
        'footer-bottom-bg' : "url('./public/images/more/28.jpg')",
        'app-banner-bg' : "url('./public/images/more/3.png')",
      },
      fontFamily : {
        'caveat' : ["Caveat", 'cursive'],
        'roboto' : ["Roboto Slab", 'serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

