/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xs: '410px',
      ti: '530px',
      sm: '640px',
      md: '768px',
      rg: '880px',
      lg: '1070px',
      xl: '1536px'
    },
    extend: {
      colors: {
        beige: 'hsla(27, 41%, 77%, 1)',
        beigeTransparent: 'rgba(220, 194, 172, 0.849)',
        black: 'hsla(0, 0%, 7%, 1)',
        green: 'hsla(141, 54%, 23%, 1)',
        grey: 'hsla(27, 31%, 94%, 1)',
        white: 'hsla(0, 0%, 100%, 1)'
      },
      display: ['group-focus'],
      screens: {
        '3xl': '1850px',
      },
      aspectRatio: {
        '2/1': '2 / 1',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'inter': ['Inter'],
      },
      lineHeight: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}