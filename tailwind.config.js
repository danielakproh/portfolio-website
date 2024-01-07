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
        "beige-background": '#FFE6CB',
        "bright-green": '#AEBAA1',
        "light-grey": '#6E6A6A', // navbar elements, job title
        "emphasis-orange": '#D19B66', // buttons, words of emphasis and section titles underline
        "ghost-grey": '#A7A7A7', // underlay texts: Background, Projects, About, contact. alpha = 19%
        "milky-brown": '#DFC3A5', // job cards, project cards & footer
        "dark-grey": '#A7A7A7', // timeline bar. alpha value = 100%
        "brown-chocolat": '#605555', // timeline dates
        "hr-separator-grey": 'rgba(255,173,0,0.36)' // alpha = 35%
      },
    },
  },
  plugins: [],
}

