/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./pages/**/*.{ts,tsx}",
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      fontFamily: {
        primary: ['OpenSans', ...fontFamily.sans],
        header: ['Boing', ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#86C9C0',
          50: '#FFFFFF',
          100: '#F7FBFB',
          200: '#DBEFEC',
          300: '#BEE2DD',
          400: '#A2D6CF',
          500: '#86C9C0',
          600: '#5FB8AC',
          700: '#459A8F',
          800: '#33736B',
          900: '#224C47',
        },
        secondary: {
          DEFAULT: '#111111',
          50: '#6D6D6D',
          100: '#636363',
          200: '#4E4E4E',
          300: '#3A3A3A',
          400: '#252525',
          500: '#111111',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        error: {
          DEFAULT: '#EB5757',
        },
        warning: {
          DEFAULT: '#E2B93B',
        },
        success: {
          DEFAULT: '#27AE60',
        },
        info: {
          DEFAULT: '#2F80ED',
        },
        dark: '#222222',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};

// rounded-[1.25rem]  20px radius //**To be added */
