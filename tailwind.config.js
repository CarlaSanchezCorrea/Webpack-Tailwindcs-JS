/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
