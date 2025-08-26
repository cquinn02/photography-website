module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [
    'hover:bg-cmq-gray-dark',
    'hover:border-cmq-gray-dark',
    'hover:text-white',
    'hover:shadow-lg',
    'hover:scale-105',
    'bg-cmq-blue',
    'bg-cmq-gray-dark',
    'text-cmq-blue',
    'border-cmq-blue',
    'border-cmq-gray-dark'
  ],
  theme: {
    extend: {
      colors: {
        'cmq-gray-dark': '#575757',
        'cmq-gray-darker': '#383838',
        'cmq-white': '#ffffff',
        'cmq-blue': '#5a81b9',
        'cmq-gray-light': '#f2f2f2',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
    }
  },
  plugins: [],
}