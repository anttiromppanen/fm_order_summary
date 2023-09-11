/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
      },
      backgroundImage: {
        bgImageMobile: "url('./src/assets/pattern-background-mobile.svg')",
        bgImageDesktop: "url('./src/assets/pattern-background-desktop.svg')",
      } 
    },
  },
  plugins: [],
}