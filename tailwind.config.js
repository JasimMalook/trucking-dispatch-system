/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1e3a5f',
        'orange': '#ff6b35',
      },
    },
  },
  plugins: [],
}
