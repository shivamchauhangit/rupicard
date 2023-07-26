/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
            'custom-gradient-start': '#5ad6c4',
            'custom-gradient-end': '#fdef78',
      },
    },
  },
  plugins: [],
}