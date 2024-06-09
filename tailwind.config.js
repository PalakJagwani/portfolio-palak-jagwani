/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "main_background" : "#ddd0d1",
        "dark_pastel" : "#b39e9f",
        "light_pastel" : "#f6ebeb",
        "gray" : "#525252"
      },
      boxShadow : {
        sm : "3px 3px 10px  black;"
      }
    },
  },
  plugins: [],
}

