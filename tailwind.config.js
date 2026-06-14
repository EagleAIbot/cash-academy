/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ca: {
          blue: "#90B1DC",
          "blue-dark": "#7A9BC8",
          "blue-light": "#E8F0FA",
          yellow: "#FAD60E",
          "yellow-dark": "#E5C20D",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 24px rgba(144, 177, 220, 0.15)",
        soft: "0 2px 12px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
