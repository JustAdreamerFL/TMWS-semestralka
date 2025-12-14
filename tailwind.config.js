/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./sub_pages/**/*.html",
    "./sub_pages/scripts/**/*.js",
    "./*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Razer Green Theme
        primary: {
          DEFAULT: "#00ff00",
          hover: "#00cc00",
          dark: "#009900",
          50: "#f0fff0",
          100: "#ccffcc",
          200: "#99ff99",
          300: "#66ff66",
          400: "#33ff33",
          500: "#00ff00",
          600: "#00cc00",
          700: "#009900",
          800: "#006600",
          900: "#003300",
        },
        secondary: {
          DEFAULT: "#00ff88",
          hover: "#00cc6a",
        },
        accent: {
          DEFAULT: "#44ff00",
          hover: "#33cc00",
        },
        success: {
          DEFAULT: "#00ff44",
          hover: "#00cc36",
        },
        error: {
          DEFAULT: "#ff3333",
          hover: "#cc2929",
        },
        warning: {
          DEFAULT: "#ffaa00",
          hover: "#cc8800",
        },
        // Dark backgrounds
        dark: {
          DEFAULT: "#0a0a0a",
          50: "#1a1a1a",
          100: "#111111",
          200: "#0d0d0d",
          300: "#0a0a0a",
          400: "#050505",
          500: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "pulse-glow": "pulse-glow 2s infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 0, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 255, 0, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 0, 0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)" },
        },
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 255, 0, 0.3)",
        "glow-strong": "0 0 40px rgba(0, 255, 0, 0.5)",
        "glow-sm": "0 0 10px rgba(0, 255, 0, 0.2)",
      },
      textShadow: {
        glow: "0 0 10px rgba(0, 255, 0, 0.5)",
        "glow-strong": "0 0 20px rgba(0, 255, 0, 0.7)",
      },
      backgroundImage: {
        "gradient-razer":
          "linear-gradient(135deg, rgba(0, 255, 0, 0.1), rgba(0, 0, 0, 0.9))",
        "gradient-glow":
          "radial-gradient(ellipse at center, rgba(0, 255, 0, 0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};
