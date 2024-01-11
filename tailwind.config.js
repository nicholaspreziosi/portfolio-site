/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    fontSize: {
      sm: "0.5rem",
      base: "0.75rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "2rem",
      "3xl": "3.75rem",
      "4xl": "5rem",
      "5xl": "6.25rem",
    },
    extend: {},
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
  important: true,
};
