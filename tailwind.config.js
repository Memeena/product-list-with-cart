/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Red Hat Text",
    },
    screens: {
      mobile: "520px",
      tablet: "800px",
      desktop: "1100px",
    },
    extend: {},
  },
  plugins: [],
};
