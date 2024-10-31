/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%, 100%': { opacity: 0, color: '#000' },
          '50%': { opacity: 1 , color: 'skyblue'},
        },
      },
    },
  },
  variants: {},
  plugins: [],
}

