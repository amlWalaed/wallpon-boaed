import defaultTheme from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";
import { appPlugin, icons } from "./plugin/tailwind/index";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      colors: {
        primary: {
          DEFAULT: "#334699",
          50: "#f1f5fd",
          100: "#e0eaf9",
          200: "#c8daf5",
          300: "#a3c2ed",
          400: "#77a2e3",
          500: "#5683db",
          600: "#4267ce",
          700: "#3855bd",
          800: "#334699",
          900: "#2e3e7a",
          950: "#20284b",
        },
        secondary: {
          DEFAULT: "#80bd57",
          50: "#f2f9ec",
          100: "#e2f1d6",
          200: "#c8e5b1",
          300: "#a4d383",
          400: "#80bd57",
          500: "#66a43e",
          600: "#4d822e",
          700: "#3d6427",
          800: "#335024",
          900: "#2d4522",
          950: "#15250e",
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, appPlugin, icons],
};
