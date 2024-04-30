/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'HeaderBackground': '#F6F6F7',
        'PrimaryFont': '#222222',
        'SecondaryFont': '#888888',
        'BorderLightGrey': '#CCCCCC',
        'BorderDarkGrey': '#222222',
        'RequiredSstar':'#C90000',
      },
    },
  },
  plugins: [],
}

