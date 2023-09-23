/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        'layout': '100px minmax(44rem, 1fr) 100px',
      },
      maxWidth: {
        'limitText': '800px'
      }
    },
  },
  plugins: [],
}