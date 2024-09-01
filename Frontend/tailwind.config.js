/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./assets/HeroImg.png')",
      },
      backgroundSize: {
        'custom-size': '100% 37rem',
      },
    },
  },
  plugins: [],
}
