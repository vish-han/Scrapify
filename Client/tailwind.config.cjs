/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        siteLight: "#F7E3C5",
        sitegreen: "#5CF8AD",
        siteBlue: "#4E71FF",
        siteBlack: "#535068",
        textBlack: "#141c3a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'xs': '400px',
      },

      gridTemplateColumns: {
        // '15': 'repeat(auto-fit, minmax(230px, 1fr))',
        '16': 'repeat(auto-fit, minmax(400px, 1fr))'
      },
    },
  },
  plugins: [],
}
