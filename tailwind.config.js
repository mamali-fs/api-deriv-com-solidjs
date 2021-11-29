module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      "60vh": "60vh",
    },
    extend: {
      fontSize: {
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      backgroundImage: {
        "arrow-left": "url('/src/assets/arrow_left.svg')",
        "arrow-right": "url('/src/assets/arrow_right.svg')",
      },
      gridTemplateColumns: {
        documentation: "220px 1fr",
      },
      colors: {
        white: "#ffffff",
        "white-gray": "#c2c2c2",
        "light-gray": "#a9a9a9",
        "superlight-gray": "#f0f1f3a3",
        gray: "#252525",
        "dark-gray": "#323738",
        "light-blue": "#85acb0",
        "gray-blue": "#272f2f",
        "light-green": "#9ed178",
        "dark-gray-1": "#1b1c1c",
        "dark-100": "#0e0e0e",
        "gray-rgba": "rgba(37, 37, 37, 0.72)",
        "gray-darkest": "#333333",
      },
      spacing: {
        "5%": "5%",
      },
      screens: {
        mobile: { max: "992px" },
        desktop: "992px",
        xl: "1334px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
