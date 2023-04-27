/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte,html}",
    ],

  theme: {
    extend: {
        colors: {
            primary:"#06D6A0",
            secondary:"#EF476F",
            dark:"#26547C",
            light:"#FFFCF9",
            golden:"#FFD166",
        },
        screens: {
          'phone': { min: '0px', max: '640px'}
      },
    },
  },
  plugins: [],
}

