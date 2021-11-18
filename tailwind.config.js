module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'arrow-left': "url('/src/assets/arrow_left.svg')",
        'arrow-right': "url('/src/assets/arrow_right.svg')",
      },
      colors: {
        "white-gray": "#c2c2c2"
      },
      spacing: {
        "5%": "5%"
      },
      screens: {
        mobile: { max: "992px" },
        desktop: "992px"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
