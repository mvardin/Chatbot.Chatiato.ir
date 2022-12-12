/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        main:"#5865F2",
        error: "#EF4444",
        success: "#22C55E",
        warning: "#FFBA08",
        info: "#417DFD",
      },
    },
  },
  plugins: [],
};
