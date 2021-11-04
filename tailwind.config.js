module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Gilroy: "Gilroy, serif",
        Axiforma: "Axiforma, serif",
      }
    },
  },
  screens: {
    "xsm": "360px",
    // => @media (min-width: 360px) { ... }

    sm: "640px",
    // => @media (min-width: 640px) { ... }

    md: "768px",
    // => @media (min-width: 768px) { ... }

    lg: "1024px",
    // => @media (min-width: 1024px) { ... }

    xl: "1280px",
    // => @media (min-width: 1280px) { ... }

    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['visited'],
    },
  },
  plugins: [],
}
