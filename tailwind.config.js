/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
      },
      colors: {
        teal: {
          DEFAULT: '#007F82',
          hover: '#00A8A8'
        },
        coal: '#504B5A',
      }
    },
  },
  plugins: [],
}

