/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          'primary-blue': '#0088cc',
          'light-blue': '#54a9eb',
          'dark-blue': '#006bb3',
          'bg-primary': '#ffffff',
          'bg-secondary': '#f4f4f5',
          'text-primary': '#000000',
          'text-secondary': '#707579',
          'border-color': '#e4e4e7',
          'message-out': '#effdde',
          'message-in': '#ffffff'
        }
      }
    },
    plugins: [],
  }