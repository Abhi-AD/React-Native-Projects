/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandYellow: "#FFE70A",
        brandLightYellow: "#F0F3BD",
        neutralBlack: "#1b0e01",
        neutralGrey: "#bababa",
        neutralWhite: "#ffffff",
        brandgreen: "#02C39A",
        brand: {
          50: "#F0F3BD",
          100: "#FFE70A",
          200: "#00A896",
          300: "#028090",
          400: "#02C39A",
          500: "#05668D",
          600: "#04596D",
          700: "#034B5D",
          800: "#023D4D",
          900: "#022A3D",
        },
        neutral: {
          50: "#F0F3BD",
          100: "#EAEAEA",
          200: "#DFDFDF",
          300: "#D1D1D1",
          400: "#C8C8C8",
          500: "#bababa",
          600: "#A9A9A9",
          700: "#848484",
          800: "#666666",
          900: "#4E4E4E",
        },
      },

      fontFamily: {
        title: ["Neco-Regular", "sans-serif"],
        display: ["Telma-Regular", "sans-serif"],
        smedium: ["Telma-Medium", "sans-serif"],
        sbold: ["Telma-Bold", "sans-serif"],
        sblack: ["Telma-Black", "sans-serif"],
      },
      fontSize: {
        "2xs": "8px",
        xs: "10px",
        sm: "13px",
        md: "16px",
        lg: "20px",
        h6: "25px",
        h5: "31px",
        h4: "39px",
        h3: "49px",
        h2: "61px",
        h1: "76px",
        base: "16px",
      },
    },
  },
  plugins: [],
};
