/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('../public/lbg.jpg')",
      }
    },
    fontFamily:{
      abc: ['Poppins', 'sans-serif'],
      f2: ['TheNightWatch'],
    },
    fontFamily:{

    }
  },
  plugins: [],
}
