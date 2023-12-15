/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'backgroundImage': "url('https://i.ibb.co/rxBFYmG/2220.jpg')",
      },
      fontFamily : {
        
        lexend : "'Lexend', sans-serif"
      },
    },
  },
  plugins: [require("daisyui")],
}
