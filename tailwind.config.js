/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Ensure it's included if using Vite
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure JSX and TSX files are included
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
