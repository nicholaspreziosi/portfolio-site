/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "2.5rem",
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
