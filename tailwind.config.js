
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightblue: "#ecf5fe",
        lightgrey: "#808080",
        darkslategrey: "#2F4F4F",
        error: "#FF0000",
        primary: "#152a43",
        secondary: "#12d1f0",
        bordergrey: "#d7dae6",
        silver:"#c4c4c4",
        darkgray:"rgba(21, 42, 67, 0.4)",
        darkslategray:"#2b4661",
        green:"#0d9f00"
      },
      fontFamily: {
        lato: ['Lato'],
        roboto: ['Roboto']
      },
      width: {
        ten: '10%',
      },
      minHeight: {
        30: "30px",
        360: "360px"
      },
      maxHeight: {
        30: "30px",
        230: "230px"
      },
      boxshadow: {
        xl: '0 0 0 0.2rem rgb(0 123 255 / 25%)',
      },
      inset:{
        '36': '36%',
        '39': '39%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}