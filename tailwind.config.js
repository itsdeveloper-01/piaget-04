/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1D4CA1",
          yellow: "#FFDE16",
          red: "#ED1C24",
          green: "#39B54A",
          gray: "#E7E7E8",
        },
      },
    },
  },
  plugins: [],
};
