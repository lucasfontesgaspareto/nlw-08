
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.tsx"],
  variants: {
    scrollbar: ['dark', 'rounded'],
  },
  theme: {
    extend: {
      colors: {
        brand: '#8257E5',
        'brand-hover': '#996DFF',
        'on-brand': '#FFFFFF',
        dark: {
          surface: {
            primary: colors.zinc['900'],
            secondary: colors.zinc['800'],
            'secondary-hover': colors.zinc['700'],
            'stroke': colors.zinc['600'],
            'tooltip': colors.zinc['100 '],
          },
          text: {
            primary: colors.zinc['100'],
            secondary: colors.zinc['400'],
            'on-tooltip': colors.zinc['800'],
          },
        },
        light: {
          surface: {
            primary: colors.white,
            secondary: colors.zinc['100'],
            'secondary-hover': colors.zinc['200'],
            'stroke': colors.zinc['300'],
            'tooltip': colors.zinc['800'],
          },
          text: {
            primary: colors.zinc['800'],
            secondary: colors.zinc['500'],
            'on-tooltip': colors.zinc['100'],
          },
        },
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
