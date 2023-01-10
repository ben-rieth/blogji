// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily, screens } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '330px',
      ...screens,
      '3xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
        handwriting: ['var(--font-caveat)', ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
