import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        crema: "#fff8ea",
        chili: "#b11f1f",
        salsa: "#e4572e",
        cilantro: "#2f855a",
        cacao: "#4a2f24"
      }
    }
  },
  plugins: []
};

export default config;
