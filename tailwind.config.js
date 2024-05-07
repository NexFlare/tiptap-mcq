/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        ...require("tailwindcss/defaultTheme").fontSize,
        xs: ".75rem",
      },
    },
  },
  plugins: [],
};
