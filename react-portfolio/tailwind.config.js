/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lambo: {
          gold: "#FFC000",
          "gold-dark": "#917300",
          "gold-text": "#FFCE3E",
          black: "#000000",
          charcoal: "#202020",
          iron: "#181818",
          white: "#FFFFFF",
          smoke: "#F5F5F5",
          ash: "#7D7D7D",
          link: "#3860BE",
          action: "#1EAEDB",
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        fallback: ['Open Sans', 'sans-serif'],
      },
      lineHeight: {
        'hero': '0.92',
        'display': '1.13',
        'title': '1.19',
        'sub': '1.15',
        'feature': '1.37',
        'body': '1.50',
      },
      letterSpacing: {
        'micro': '0.225px',
        'caption': '-0.42px',
        'label': '0.96px',
      },
    },
  },
  plugins: [],
}
