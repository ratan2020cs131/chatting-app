/** @type {import('tailwindcss').Config} */

export const colors = {
  primary: {
    white: "#fff",
    black: "#343a40",
    gray: "#adb5bd",
    green: "#57cc99",
    error: "#e76f51",
    blue: "#0096c7",
  },
  secondary: {
    gray: "#6c757d",
    link: "#4361ee",
    green: "#29bf12",
  },
  light: {
    green: "#c7f9cc",
  },
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors,
    extend: {
      fontFamily: {
        sans: ["PT Sans"],
      },
      animation: {
        loading: "rotate 2s infinite",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        overlay: "0 0 5px 0 #00000070",
        input: "0 0 0 3px #caf0f8",
        error: "0 0 0 3px #e76f5150",
        success: "0 0 0 3px #c7f9cc",
      },
    },
  },
  plugins: [],
};
