/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        2000: "2000px",
      },
      textColor: {
        // main: "#FFFFFF",
        // hover: "#33FF00",
        main: "#fbf1c7",
        hover: "#fe8019",
      },
      backgroundColor: {
        // dark: "#000000",
        dark: "#282828",
      },
    },
  },
  plugins: [],
};
