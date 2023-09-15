/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte,html}",
    ],

  theme: {
    extend: {
        colors: {
            primary:"#49c5b6",
            secondary:"#2779a7",
            dark:"#000",
            discord: "#7289DA"
        },
        screens: {
          'phone': { min: '0px', max: '640px'}
      },
    },
  },
  plugins: [],
}

