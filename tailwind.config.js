/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        grey: "var(--grey)",
        darkGrey: "var(--darkGrey)",
        offBlack: "var(--offBlack)",
      },
    },
  },
  plugins: [],
};
