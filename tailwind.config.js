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
        /** Modern theme palette */
        "forest-deep": "#28361B",
        "moss": "#626E5A",
        "sage-light": "#E6EFDB",
        "mist": "#99A4A0",
        "plum-deep": "#352F35",
        "lavender-muted": "#7F7482",
        "slate-deep": "#3E4049",
        "periwinkle": "#8F99C9",
        "cloud-lavender": "#86879E",
        "charcoal": "#222222",
        /** Backwards-compatible tokens */
        "blue-primary": "#626E5A",
        "blue-secondary": "#3E4049",
        "blue-tertiary": "#EDEAE3",
        "brown-primary": "#352F35",
        "brown-secondary": "#626E5A",
        "brown-tertiary": "#DAD5CC",
        "paper-white": "#F7F5F2",
        "ink-black": "#222222",
      },
    },
  },
};
