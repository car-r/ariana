/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F6F1E8",
          50: "#FBF8F2",
          100: "#F6F1E8",
          200: "#EDE6D9",
        },
        gold: {
          DEFAULT: "#C4A574",
          dark: "#9A7B4F",
          light: "#D4C09A",
        },
        charcoal: {
          DEFAULT: "#2C2926",
          muted: "#5C574F",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Source Sans 3"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'separator': "url('https://pxdraft.com/themeforest/nairo/nairo/static/img/border.png')",
      }
    },
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("flowbite/plugin"),
  ],
}
