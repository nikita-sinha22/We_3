/** @type {import('tailwindcss').Config} */
export default {
  darkMode: `class`,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'tic-tac-toe': "url('../src/assets/images/tictacbg.jpg')",
        'memory': "url('../src/assets/images/memorybg.jpg')"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
