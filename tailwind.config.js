import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#7124A8",
              100: "F1E9F6",
              200: "#EADEF2",
              300: "#D3BBE4",
              400: "#7124A8",
              500: "#662097",
              600: "#5A1D86",
              700: "#551B7E",
              800: "#441665",
              900: "#280D3B",
            },
            secondary: {},
            focus: "#7124A8",
          },
        },
      },
    }),
  ],
};

module.exports = config;
