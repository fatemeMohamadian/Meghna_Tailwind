/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        menu:'menu',
        project:'project',
        text:'text',
        text2:'text2',
      },
      backgroundImage:{
        slide1:"url('src/assets/img/hero-area.jpg')",
      },
      boxShadow:{
        box1:'2px 2px 5px rgba(44, 44, 44, 0.3), 13px 13px 0 rgba(255, 255, 255, 0.7)',
      },
      animation:{
        anime1:'img1 linear infinite 5s',
        anime2:'img2 linear infinite 5s',
      },
    },
  },
  plugins: [],
}

