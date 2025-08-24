/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       keyframes: {
        'app-logo-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'app-logo-spin': 'app-logo-spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}

