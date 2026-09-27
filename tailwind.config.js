/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#0d0b2b",
          deep: "#080718",
          light: "#161340",
        },
        plum: {
          DEFAULT: "#2a1052",
          light: "#4a1f7a",
        },
        blush: {
          DEFAULT: "#f3b6d3",
          soft: "#f8d3e6",
        },
        gold: {
          DEFAULT: "#e9c46a",
          light: "#f4d98f",
        },
        glow: "#fdf8f2",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        script: ["var(--font-dancing)", "cursive"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: 0.2, transform: "scale(0.8)" },
          "50%": { opacity: 1, transform: "scale(1.15)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(233,196,106,0.35)" },
          "50%": { boxShadow: "0 0 40px rgba(233,196,106,0.7)" },
        },
      },
      animation: {
        twinkle: "twinkle 3.5s ease-in-out infinite",
        floaty: "floaty 6s ease-in-out infinite",
        glowPulse: "glowPulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
