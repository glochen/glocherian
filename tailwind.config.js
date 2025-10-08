const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",],
  plugins: [heroui()],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans TC"', 'sans-serif'],
        'lxgw-wenkai-tc': ['"LXGW WenKai TC"', 'sans-serif'],
      },
      colors: {
        /** Blues */
        "blue-primary": "#4e7fa3", // darkest
        "blue-secondary": "#93AEBF", // middle
        "blue-tertiary": "#E4EDF2", // lightest
        /** Browns */
        "brown-primary": "#611D0F", // red-brown
        "brown-secondary": "#664935", // brown
        "brown-tertiary": "#DFD3B5", // tan
        /** neutrals */
        "paper-white": "#FFFBF0",
        "ink-black": "##141414",
      },
    },
  },
};
