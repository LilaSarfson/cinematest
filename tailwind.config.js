
module.exports = {

  purge: [
    '/public/index.html',
    './src/**/*.(vue,js,jsx,ts,jsx,tsx)'
  ],
  theme: {
      colors:{
        'blueDark':'#242333',
        'white-cinema':'#fff',
        'seat':'#444451',
        'blueSpace':'#6feaf6',
        'showcase':'rgba(0, 0, 0, 0.1)',
        'black':'#000',
    
      },
      height:{
        lgCinema: '70px',
        smallseat:'12px',

      },
      boxShadow: {
        '3xl': '0 5px 8px 5px white',
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
