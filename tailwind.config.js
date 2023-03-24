/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      red: "#A52837",
      slate: "#1C252E",
      white: "#ffffff",
      black: "#000000",
      highlight: "#EFEFEF",
    },
    extend: {},
  },
  plugins: [],
};
