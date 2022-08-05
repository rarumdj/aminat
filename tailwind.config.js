/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "project-line": "url(assets/images/lines.svg)",
      },
      animation: {
        side: "side 2s ease-in-out infinite",
      },
      keyframes: {
        side: {
          "0%, 100%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1) ",
          },
          "50%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};