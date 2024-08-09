/** @type {import('tailwindcss').Config} */

export const colors = {
  primary: {
    white: "#fff",
    black: "#000",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
