module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)',opacity:'0' },
          '100%': { transform: 'translateX(0)',opacity:'1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)',opacity:'0' },
          '100%': { transform: 'translateX(0)',opacity:'1' },
        }
      },
      animation: {
        slideInRight: 'slideInRight 1s ease-in-out',
        slideInLeft: 'slideInLeft 1s ease-in-out'
      }
    }
  },
  plugins: [],
};
