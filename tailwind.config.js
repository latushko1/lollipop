/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      'sm': {'max': '470px'},
      'md': {'max': '768px'},
      'lg': {'max': '992px'},
      'xl': {'max': '1780px'},
      'ad':{'max':'360px'},
    },

    container:{
      padding: '20px',
      center: true
    },

    extend: {
      colors: {
        primary: 'rgba(126, 52, 176, 0.15)',
      },
    },


  },
  plugins: [],
}
