module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "white": "#ffffff",
        "white-gray": "#c2c2c2",
        "light-gray": "#a9a9a9",
        "gray": "#252525",
        "dark-gray": "#323738",
        "light-blue": "#85acb0",
        "gray-blue" : "#272f2f",
        "light-green": "#9ed178",
        "dark-gray-1" : "#1b1c1c",
        "dark-gray-2" : "#0e0e0e"
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
