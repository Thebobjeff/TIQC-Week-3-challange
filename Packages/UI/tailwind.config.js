/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#080b0f',
          surface: '#0d1117',
          border: '#161b22',
          muted: '#3a4450',
          blue: '#00a2ff',
          green: '#00ed64',
          red: '#ff4d6a',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
