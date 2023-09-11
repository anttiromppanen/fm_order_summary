/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": { "max": "360px" },
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ["Red Hat Display", "sans-serif"],
      },
      colors: {
        userPaleBlue: "hsl(225, 100%, 94%)",
        userBrightBlue: "hsl(245, 75%, 52%)",
        userVeryPaleBlue: "hsl(225, 100%, 98%)",
        userDesaturatedBlue: "hsl(224, 23%, 55%)",
        userDarkBlue: "hsl(223, 47%, 23%)",
        userTextGrey: "hsl(231, 8%, 50%)",
        userPlanBG: "hsl(230, 75%, 98%)",
      },
      backgroundImage: {
        bgImageMobile: "url('./src/assets/pattern-background-mobile.svg')",
        bgImageDesktop: "url('./src/assets/pattern-background-desktop.svg')",
      }
    },
  },
  plugins: [],
}