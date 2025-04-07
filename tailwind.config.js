/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lumon-bg": "#0c243b",
        "lumon-text": "#8bdae9",
        "lumon-highlight": "#a2e9f3",
      },
      fontFamily: {
        mono: ["var(--font-mono)"],
        sans: ["var(--font-sans)"],
      },
      gridTemplateColumns: {
        24: "repeat(24, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
