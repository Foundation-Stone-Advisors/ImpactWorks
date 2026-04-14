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
        // Brand colors — extracted directly from Impact Works logo
        brand: {
          orange: "#E8751A",
          "orange-light": "#F5943D",
          blue: "#2E8BC0",
          "blue-light": "#4DA8D9",
          "blue-dark": "#1A6B9C",
          green: "#3DAA5C",
          "green-light": "#5EC87A",
          gold: "#F5A623",
        },
        // Surface system — dark futuristic
        navy: {
          950: "#050810",
          900: "#0A0E27",
          800: "#0F1535",
          700: "#151D45",
          600: "#1E2A5A",
        },
        // Neutrals on dark
        slate: {
          100: "#E8ECF4",
          200: "#C4CCE0",
          300: "#94A3C4",
          400: "#6B7BA0",
          500: "#4A5578",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        site: "1280px",
      },
      fontSize: {
        "hero": ["clamp(3rem, 7vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "section": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "sub": ["clamp(1.25rem, 2.5vw, 1.75rem)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        "glow-orange": "0 0 40px -8px rgba(232, 117, 26, 0.3)",
        "glow-blue": "0 0 40px -8px rgba(46, 139, 192, 0.3)",
        "glow-green": "0 0 40px -8px rgba(61, 170, 92, 0.3)",
        "card": "0 1px 2px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)",
        "card-hover": "0 4px 8px rgba(0,0,0,0.4), 0 12px 40px rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(180deg, #0A0E27 0%, #0F1535 50%, #0A0E27 100%)",
        "section-gradient": "linear-gradient(180deg, #0A0E27 0%, #050810 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "orbit-slow": "orbit 25s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
