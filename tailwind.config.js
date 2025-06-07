/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        palette1: "#fbbf24",
        palette2: "#34d399",
        palette3: "#60a5fa",
      },
      screens: {
        sm: "304px",
        // => @media (min-width: 640px) { ... }

        md: "478px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      backdropFilter: {
        none: "none",
        blur: "blur(8px)",
      },
      animation: {
        gradient: "gradient 15s ease infinite",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(-45deg, #000000, #1a1a1a, #2d0a31, #0a192f)",
        "gradient-light":
          "linear-gradient(-45deg, #f0f9ff, #e0f2fe, #dbeafe, #bfdbfe)",
      },
    },
  },
  plugins: [require("tailwindcss-filters")],
};
