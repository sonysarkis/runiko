import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#F5C518",
          bright: "#FFD700",
          dark: "#C9A227",
        },
        bg: {
          deep: "#111111",
          card: "#1E1E1E",
          header: "#1A1A1A",
          light: "#2A2A2A",
        },
        border: {
          DEFAULT: "#2A2A2A",
          gold: "#F5C518",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#CCCCCC",
          muted: "#888888",
          vmuted: "#555555",
        },
        agent: {
          done: "#34d399",
          auto: "#F5C518",
          ai: "#a78bfa",
          progress: "#60a5fa",
          bug: "#f87171",
        },
      },
      fontFamily: {
        display: ["Orbitron", "sans-serif"],
        sub: ["Rajdhani", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "logo-glow": "0 0 18px rgba(245,197,24,0.6)",
        "metric-glow": "0 0 20px rgba(245,197,24,0.4)",
        "topbar": "0 2px 20px rgba(245,197,24,0.15)",
        "panel": "-4px 0 40px rgba(245,197,24,0.1)",
        "toast": "0 4px 30px rgba(245,197,24,0.2)",
        "card-hover": "0 0 30px rgba(245,197,24,0.25)",
      },
      animation: {
        "pulse-gold": "pulseGold 1.5s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        pulseGold: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.7)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      transitionTimingFunction: {
        "panel": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
