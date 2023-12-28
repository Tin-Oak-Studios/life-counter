import plugin from "tailwindcss/plugin.js"

export default {
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        'primary': '#D4CF48'
      },
    },
    fontFamily: {
      'lemon': ['"Lemon/Milk"'],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
  purge: ["./index.html",'./src/**/*.{vue,js,ts}'], //for unused css
  variants: {
    extend: {},
  },

  darkmode: false, // or 'media' or 'class'
}