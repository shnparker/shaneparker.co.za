const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ["./src/**/*.{jsx,tsx}"],
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
          default: "#ff5d5f",
          dark: "#872835",
          "extra-dark": "#350f2b",
        },
      },
      typography: (theme) => ({
        default: {
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
    require("@tailwindcss/ui", function ({ addBase, addComponents, theme }) {
      addBase([
        {
          "@font-face": {
            fontFamily: "Inter var",
            fontWeight: "100 900",
            fontStyle: "normal",
            fontNamedInstance: "Regular",
            fontDisplay: "swap",
            src: 'url("/fonts/Inter-roman.var-latin.woff2?3.13") format("woff2")',
          },
        },
        {
          "@font-face": {
            fontFamily: "Inter var",
            fontWeight: "100 900",
            fontStyle: "italic",
            fontNamedInstance: "Italic",
            fontDisplay: "swap",
            src: 'url("/fonts/Inter-italic.var-latin.woff2?3.13") format("woff2")',
          },
        },
      ]);
    }),
  ],
};
