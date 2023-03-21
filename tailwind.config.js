/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
