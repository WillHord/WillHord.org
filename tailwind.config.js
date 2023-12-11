/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': {'max': '639px'},
      'mmd': {'max': '767px'},
      'md': {'min': '768px'},
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'sans-serif': ['Montserrat', 'sans-serif'],
      'body': ['Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Tahoma', 'sans-serif'],
    },
    extend: {
      brightness: {
        25: '.25',
        30: '.30',
        40: '.40',
      },
      keyframes: {
        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-out forwards',
      'fade-in-top': 'fadeInTop 0.5s ease-out',
      'fade-in-long': 'fadeIn 3s ease-out forwards',
    }
  },
  plugins: [],
}
