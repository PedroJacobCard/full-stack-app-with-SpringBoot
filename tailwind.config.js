/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundPaper: "#282c34",
        backGlass: "rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

