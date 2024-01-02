/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        button: '0 7.2px 35.2px 0 #0000002e',
        'button-light': '#ddd5d559 0 5px 80px;',
      },
      backgroundImage: {
        'off-screen': 'url(/dark-bg.png)',
      },
    },
  },
  plugins: [],
};
