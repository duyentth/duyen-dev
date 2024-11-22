module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        darkBlue: "hsl(217, 28%, 15%)",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
        accentCyan: "hsl(176, 68%, 64%)",
        accentBlue: "hsl(198, 60%, 50%)",
        lightRed: "hsl(0, 100%, 63%)",
        darkViolet: "hsl(257, 27%, 26%)",
        grayishViolet: "hsl(257, 7%, 63%)",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        sixtyfour: ["Sixtyfour", "sans-serif"],
      },
      backgroundImage: {
        bookmark: "url('./assets/bookmark.png')",
      },
      listStyleImage: {
        checkmark: 'url("./assets/check-mark.png")',
      },
    },
  },
  plugins: [],
};
