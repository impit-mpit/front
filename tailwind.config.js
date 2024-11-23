/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "bg":"#F4F7FB",
        "content-primary":"#00A9FF",
        "text-primary":"#121315",
        "content-second":"#FAE5D1",
        "content-third":"#F4F7FB"
      }
    },
  },
  plugins: [],
}

