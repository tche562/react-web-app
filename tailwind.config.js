/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'black',
        secondary: 'red-600',
        lightGrey: 'slate-100',
        grey:'slate-200',
        paragraph:'slate-500',
        red:'red-600',
      },
    },
  },
  plugins: [],
}

