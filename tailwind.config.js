/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // add 
    extend: {
      colors:{
        mainColor:'#0000',
      },
      animation: {
        slide: 'slide 20s linear infinite', // Define the slide animation
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};