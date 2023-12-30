/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // defining custom colors. See
      colors: {
        "peace-brown": '#F1EAE1',
        "bright-green": '#AEBAA1'
      },
    },
  },
  plugins: [],
}

