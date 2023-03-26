/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-black": "#303030",
        "base-grey": "#D4D4D4",
        "base-light-grey": "#F4F4F4",
        "base-blue": "#01959F",
        "base-light-blue": "#F7FEFF",
        "base-yellow": "#FEEABC",
        "base-light-yellow": "#FFFCF5",
        "base-red": "#F5B1B7",
        "base-light-red": "#FFFAFA",
        "base-green": "#B8DBCA",
        "base-light-green": "#F8FBF9",
        "base-danger": "#E11428",
      },
    },
  },
  plugins: [],
};
