module.exports = {
  content: {
    files: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  },
  theme: {
    extend: {
      colors: {
        primary: "#06CCFE",
        secondary: "#06D8FE",
        thirdly: "#E0F3FF",
        dark: "#030E27",
        success: "#03D77A",
        warning: "#EFB01A",
        blue: "#0078FE",
      },
      fontSize: {
        mini: "0.625rem",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
