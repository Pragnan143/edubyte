/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // fontFamily: {
      //   // eslint-disable-next-line no-undef
      //   poppins: ["Poppins", ...defaultTheme.fontFamily.poppins],
      // },
      colors: {
        color4: "rgba(204, 213, 174, 0.27)",
        color1: "#FAEDCD",
        color2: "#FEFAE0",
        color3: "#E9EDC9",
        color5: "#9BA285;",
      },
    },
  },
  plugins: [],
};
