module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        violet: {
          50: '#f6f5ff',
          100: '#ede9ff',
          200: '#d6ccff',
          300: '#b8a8ff',
          400: '#9066ff',
          500: '#6f32ff',
          600: '#5a0be6',
          700: '#4700b4',
          800: '#34007f',
          900: '#220047',
        },
      },
      backgroundImage: {
        'violet-light': 'linear-gradient(135deg, rgba(111,50,255,0.08), rgba(90,11,230,0.06))',
        'violet-dark': 'linear-gradient(135deg, rgba(111,50,255,0.12), rgba(90,11,230,0.09))',
      },
    },
  },
  plugins: [],
}