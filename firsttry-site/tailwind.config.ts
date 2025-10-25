import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "88rem",
      },
      screens: {
        xs: "475px",
      },
      colors: {
        // Gold accent system for FirstTry
        gold: {
          50: "#fefdf8",
          100: "#fdf9e7",
          200: "#f9f0c2",
          300: "#f5e6c5", // primary gold
          400: "#e6d4a0",
          500: "#d4c084",
          600: "#b9a988", // dimmed gold
          700: "#9c8c6b",
          800: "#7a6b4f",
          900: "#59584f", // footnote gold
        },
      },
    },
  },
  plugins: [],
};

export default config;
