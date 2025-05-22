/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#fe04b4",
        "bg":"#3f3e66",
        "sec":'#202022',
        "alt":"#2d2e32"
      },
      // backgroundImage:{
      //   'hero': "url('../src/assets/hero.jpeg')",
      // }
    },
  },
  plugins: [],
}