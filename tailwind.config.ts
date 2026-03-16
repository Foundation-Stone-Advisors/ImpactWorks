import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "impact-blue": "#1F4ED8",
        "deep-blue": "#1E3A8A",
        "teal-accent": "#14B8A6",
        "light-bg": "#F8FAFC",
        "text-dark": "#0F172A",
        navy: "#0f172a",
        gold: "#f59e0b",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        data: ["IBM Plex Sans", "Inter", "ui-sans-serif", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "count-up": "countUp 2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
