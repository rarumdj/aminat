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
     
    },
  },
  plugins: [require("flowbite/plugin")],
};
