/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#2222f2', 600: '#1818c4', 100: '#dfe1ff', 50: '#eff0ff' },
        care: { DEFAULT: '#f0669f', 600: '#cf3b79', 100: '#ffdbe9', 50: '#fff1f6' },
        ink: '#0a0f3c',
        mist: '#f6f7ff',
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
