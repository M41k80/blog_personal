/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  
  theme: {
    extend: {},
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
    },
    screens: {
      sm:"640px",

      md: "768px",

      lg: "1090px",

      xl: "1280px",

      "2xl": "1536px",

      "3xl": "1720px",

      "4xl": "1856px",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': 'pink',
        },
      }
      addUtilities(extendUnderline)
      
    }
  ],
}

