module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      animation: {
        hamburger: "spin 2s ease-in-out 1",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
