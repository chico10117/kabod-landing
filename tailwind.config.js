/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4ECE3',
        warmWhite: '#FFFDF9',
        sand: '#D7C7B8',
        taupe: '#A79A8E',
        caramel: '#B29578',
        coffee: '#6D5848',
        charcoal: '#0B0A09',
        muted: '#6F6860',
        border: '#E7DCD1',
        sage: '#7C8A79',
        clay: '#B8735F',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Manrope', 'Avenir Next', 'sans-serif'],
      },
      boxShadow: {
        salon: '0 18px 55px rgba(109, 88, 72, 0.12)',
        soft: '0 8px 28px rgba(11, 10, 9, 0.08)',
      },
    },
  },
  plugins: [],
};
