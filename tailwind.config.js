const defaultTheme = require("tailwindcss/defaultTheme"); // eslint-disable-line
const colors = require("tailwindcss/colors"); // eslint-disable-line

module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        standalone: { raw: "(display-mode: standalone)" },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.cyan.700"),
              "&:hover": {
                color: theme("colors.cyan.500"),
              },
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme("colors.red.500"),
              "&:hover": {
                color: theme("colors.red.400"),
              },
            },
            h2: {
              color: theme("colors.white"),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["responsive", "dark"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
