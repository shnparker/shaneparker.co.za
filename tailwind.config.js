const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "twitter-blue": "rgb(29,161,242)",
        "linkedin-blue": "#0a66c2",
        "brand-blue": "#00b6c9",
        "brand-red": {
          DEFAULT: "#ff5d5f",
          dark: "#872835",
          "extra-dark": "#350f2b",
        },
      },
      screens: {
        standalone: { raw: "(display-mode: standalone)" },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.brand-red.default"),
              "&:hover": {
                color: theme("colors.brand-red.dark"),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    margin: ["responsive", "first"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
