/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-bg": "hsl(214, 32%, 81%)", // Custom background color
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
