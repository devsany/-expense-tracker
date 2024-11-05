/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        30: "30deg", // Custom rotation of 30 degrees
      },
    },
    variants: {
      extend: {
        rotate: ["hover"], // Enable hover variant for rotation
      },
    },
  },
  plugins: [],
};
