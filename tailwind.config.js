module.exports = {
  content: ["./public/**/*.{html,js,scss}"],
  theme: {
    screens: {
      'sm'   : '640px',
      'md'   : '768px',
      'lg'   : '1024px',
      'xl'   : '1280px',
      '2xl'  : '1536px',
      '2k'   : '1920px',
      'cont' : '2050px',
      '4k'   : '2560px',
    },
    fontFamily: {
      inter:   ['Inter', 'sans-serif'],
      dm:      ['DM Serif Display', 'sans-serif'],
      pbsans:  ['Public Sans', 'sans-serif'],
      redhot:  ['Red Hat Display', 'sans-serif'],
      primary: ['Montserrat', 'sans-serif']
    },
    extend: {
      fontSize: {
        '10': ['0.625rem', '0.75rem'],
        '40': ['2.5rem', '3.125rem'],
        '78': ['4.875rem','5.5rem'],
        '72': ['4.5rem','5.125rem'],
        '68': ['4.25rem','4.875rem'],
        '64': ['4rem','4.625rem'],
        '52': ['3.25rem','3.875rem'],
      },
      colors: {
        offwhite: '#F9F9F9',
        navyblue: '#30336B',
        sky: '#00CEC9',
        offsky: '#DFF0EE',
        gray: '#707070',
        darkgray: '#6E6E6E',
        caribbeanGreen: '#368F84',
        ligthgray: '#0000001A',
        ligthoffgray: '#E3E4E8',
      },
      boxShadow: {
        'shadow': '0px 0px 10px rgba(0, 0, 0, 0.09)',
      },
    },
  },
  plugins: [],
}

