/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Tahoma', 'sans-serif'],
    },
    // colors: {
    //   'background': '#282E34',
    // },
    extend: {
      brightness: {
        25: '.25',
        30: '.30',
        40: '.40',
      },
    },
  },
  plugins: [],
}

