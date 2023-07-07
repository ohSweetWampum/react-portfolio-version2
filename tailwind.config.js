/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../public/index.html"],
  theme: {
    extend: {
      boxShadow: {
        pen: "0 0 3px 2px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        "special-elite": ["'Special Elite'", "cursive"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
