/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        dark: {
          bg: '#000000',
          surface: '#111111',
          border: '#1a1a1a',
        }
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['JetBrains Mono', 'monospace'],
      },

    },
  },
  plugins: [],
}

