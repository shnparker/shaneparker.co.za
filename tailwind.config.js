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
    },
  },
  variants: {},
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
