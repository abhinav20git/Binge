/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      daisyui: {
        themes: ["light","aqua"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

