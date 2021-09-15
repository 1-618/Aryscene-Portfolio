module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'Poppins': ['Poppins'],
      'Roboto': ['Roboto Mono'],
      'Patua': ['Patua One']
     },
     boxShadow: {
        'custom-light': '0 0 10px #313131',
        'custom-dark': '5px 5px 10px #0a0c0e, -5px -5px -10px #14161c',
        //'custom-dark':  '0px 8px 32px 0 rgba( 31, 38, 135, 0.37 )'
     },
     backGround: {
       'custom-dark':'#bbd2c5',
     },
     backdropFilter: {
        'custom-dark': 'blur( 10px )',
     },
     border: {
       'custom-dark':'1px solid rgba( 255, 255, 255, 0.18 )'
     },

    extend: {
      colors: {
        orange: {
          DEFAULT: '#F37335',
        },
        yellow: {
          DEFAULT: '#FDC830',
        },
        red: {
          DEFAULT: '#dd1818',
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow:["dark"],
      backGround:["dark"],
      backdropFilter:["dark"],
      border:["dark"],
    },
  },
  plugins: [],
}
