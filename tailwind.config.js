/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        peach: {
          dark: "#D87D4A",
          light: "#fbaf85",
        },
        primary: {
          black: "#101010",
          'black-50': '#00000080',
          'white-50': '#FFFFFF80',
          'white-75': '#FFFFFFBF',
          white1: "#F1F1F1",
          white2: "#FAFAFA",
        },
      },
      screens: {
        'xs': '475px'
      }
    },
  },
  plugins: [],
};
