/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        button: '0 7.2px 35.2px 0 #0000002e',
        'button-light': '#ddd5d559 0 5px 80px;',
        'profile-img': '0 28px 60px 0 rgba(0, 0, 0, 0.50)',
        'start-menu': 'rgba(255, 255, 255, 0.05 ) 0 0 6px 6px;',
      },
      backgroundImage: {
        'off-screen': 'url(/dark-bg.png)',
      },
      colors: {
        'white-100': '#f5f5f5',
      },
      animation: {
        appear: 'appear 0.7s',
      },
      keyframes: {
        appear: {
          '0%': {
            transform: 'translateY(-10vh)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
