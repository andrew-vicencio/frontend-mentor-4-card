/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'fm-red': 'hsl(0, 78%, 62%)',
        'fm-cyan': 'hsl(180, 62%, 55%)',
        'fm-orange': 'hsl(34, 97%, 64%)',
        'fm-blue': 'hsl(212, 86%, 64%)',
        'fm-dark-blue': 'hsl(234, 12%, 34%)',
        'fm-grey-blue': 'hsl(229, 6%, 66%)',
        'fm-light-grey': 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
};
