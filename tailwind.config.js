/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.before\\:content': {
          content: '伪元素'
        },
        '.after\\:content': {
          content: '伪元素'
        }
      })
    }
  ]
}
