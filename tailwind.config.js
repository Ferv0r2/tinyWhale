const { default: plugin } = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#0d0222",
      },
      width: {
        128: "32rem",
      },
      height: {
        108: "26rem",
      },
      left: {
        "-16": "-4rem",
      },
      right: {
        "-16": "-4rem",
      },
      minHeight: {
        "1/2": "50%",
        halfScreen: "70vh",
      },
      animation: {
        show: "modalShow 0.3s",
        showInfinity: "modalShow 1s infinite alternate",
        showDisplay: "itemShow 0.5s",
        boxFlicker: "flicker 1.5s infinite alternate",
        miningFlicker: "flickerBlue 1.5s infinite alternate",
      },
      keyframes: {
        modalShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        itemShow: {
          from: {
            opacity: 0,
            transform: "scale(0)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        flicker: {
          "0%, 18%, 22%,100%": {
            "box-shadow":
              "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #cf00cf, 0 0 80px #cf00cf, 0 0 90px #cf00cf, 0 0 100px #cf00cf, 0 0 150px #cf00cf",
          },
          "55%": {
            "box-shadow":
              "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #cf00cf, 0 0 40px #cf00cf, 0 0 45px #cf00cf, 0 0 50px #cf00cf, 0 0 75px #cf00cf",
          },
        },
        flickerBlue: {
          "0%, 18%, 22%,100%": {
            "box-shadow":
              "0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #32155f, 0 0 80px #32155f, 0 0 90px #32155f, 0 0 100px #32155f, 0 0 150px #32155f",
          },
          "55%": {
            "box-shadow":
              "0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #32155f, 0 0 40px #32155f, 0 0 45px #32155f, 0 0 50px #32155f, 0 0 75px #32155f",
          },
        },
      },
      animationDelay: {
        3000: "3000ms",
      },
    },
  },
  variants: {
    animationFillMode: ["responsive"],
  },
  plugins: [require("tailwindcss-animation")],
};
