/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(22, 58, 95)",
        dark: "rgb(17, 44, 71)",
        highlight: "rgb(248, 248, 248)",
        border: "rgb(235, 235, 235)",
        primaryColor: "Var(--color-primary)",
        primaryAsh: "Var(--color-ash)",
      },
    },
  },
  plugins: [],
};
