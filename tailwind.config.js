/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        border: "black",
      },
      backgroundColor: {
        main: "#83b7f1",
      },
    },
  },
  plugins: [],
};
