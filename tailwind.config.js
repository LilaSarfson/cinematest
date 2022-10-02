const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-20': {
      transform: 'rotateX(20deg)',
    },
    '.rotate-x-45': {
      transform: 'rotateX(-45deg)',
    },
    '.rotate-x-60': {
      transform: 'rotateX(60deg)',
    },
    '.rotate-x-80': {
      transform: 'rotateX(80deg)',
    },
  })
})
module.exports = {

  purge: [
    '/public/index.html',
    './src/**/*.(vue,js,jsx)'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors:{
        'blueDark':'#242333',
        'white-cinema':'#fff',
        'seat':'#444451',
        'blueSpace':'#6feaf6',
        'showcase':'rgba(0, 0, 0, 0.1)',
        'black':'#000'
    
      },
      height:{
        lgCinema: '70px',
        smallseat:'12px'

      },
      fontFamily:{
        'sans':['Lato','sans-serif']
      }
  },
  variants: {
    extend: {},
  },
  plugins: [rotateX],
}
