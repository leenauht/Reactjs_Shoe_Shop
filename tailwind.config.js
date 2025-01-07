/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "bg-product": "#F2F9FF",
        "bg-modal": "#D4F6FF",
        "bg-overlay": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
