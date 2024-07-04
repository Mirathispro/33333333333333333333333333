/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#000618",
          "200": "rgba(255, 255, 255, 0.8)",
          "300": "rgba(255, 255, 255, 0.2)",
          "400": "rgba(125, 125, 125, 0.29)",
          "500": "rgba(255, 255, 255, 0.51)",
        },
        powderblue: "rgba(199, 225, 219, 0.11)",
        white: "#fff",
        dodgerblue: {
          "100": "#5991ff",
          "200": "rgba(89, 145, 255, 0.05)",
        },
        lightslategray: "rgba(164, 142, 169, 0.7)",
        mintcream: "#f5fbf2",
        darkmagenta: {
          "100": "#ad1aaf",
          "200": "rgba(173, 26, 175, 0.05)",
        },
        gainsboro: {
          "100": "rgba(230, 230, 230, 0.8)",
          "200": "rgba(217, 217, 217, 0.9)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        arial: "Arial",
        abel: "Abel",
        lato: "Lato",
        "display-text-header-big": "Oxanium",
      },
      borderRadius: {
        "381xl": "400px",
        "4xl-5": "23.5px",
        mini: "15px",
        "12xs-3": "0.3px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      lg: "18px",
      "81xl": "100px",
      "31xl": "50px",
      "11xl": "30px",
      "6xl": "25px",
      xl: "20px",
      "21xl": "40px",
      "3xl": "22px",
      "9xl": "28px",
      "16xl": "35px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
