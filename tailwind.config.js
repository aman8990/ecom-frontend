/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridRow: {
        'span-full': '1 / -1',
      },
    },
  },
  plugins: [],
};
