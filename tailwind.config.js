/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9', // cyan
        secondary: '#10B981', // emerald green
        dark: '#0F172A',
        accent: '#22D3EE',
      },
    },
  },
  plugins: [],
}
