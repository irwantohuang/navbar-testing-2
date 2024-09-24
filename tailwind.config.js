/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center:true,
        padding: "24px"
      },
      colors: {
        primary: {
          DEFAULT: "#FECF7D",
          white: "#FCFCFC"
        }
      }
    },
  },
  plugins: [],
}