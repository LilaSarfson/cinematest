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
        lgCinema: '70px'
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
