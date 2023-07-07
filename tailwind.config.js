/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../public/index.html"],
  theme: {
    extend: {
      keyframes: {
        pulse: {
          // @ts-ignore
          "0%, 100%": { opacity: 0 },
          // @ts-ignore
          "50%": { opacity: 1 },
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      fontFamily: {
        "special-elite": ["'Special Elite'", "cursive"],
      },
    },
  },
  variants: {
    extend: {
      textDecoration: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
