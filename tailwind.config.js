/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Ensure it includes JSX/TSX if using React
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as default sans-serif font
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
