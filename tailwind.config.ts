import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f6f5ff",
          100: "#ebe7ff",
          200: "#d6ceff",
          300: "#b0a3ff",
          400: "#8b78ff",
          500: "#664dff",
          600: "#4e38e6",
          700: "#3e2db4",
          800: "#2d2282",
          900: "#1d1651"
        }
      }
    },
  },
  plugins: [],
};
export default config;