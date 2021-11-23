module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    
    extend: {
      backgroundImage: {
        'arrow-left': "url('/src/assets/arrow_left.svg')",
        'arrow-right': "url('/src/assets/arrow_right.svg')",
      },
      gridTemplateColumns: {
        documentation: '220px 1fr',
      },
      colors: {
        "white-gray": "#c2c2c2",
        "dark-100": "#0e0e0e",
        "gray-rgba": 'rgba(37, 37, 37, 0.72)',
        'gray-darkest': '#333333'
      },
      spacing: {
        '5%': '5%',
      },
      screens: {
        mobile: { max: '992px' },
        desktop: '992px',
        xl: '1334px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
