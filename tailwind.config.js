/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Open Sans', ...fontFamily.sans],
      },
      colors: {
        // primary: {
        //   // Customize it on globals.css :root
        //   50: 'rgb(var(--tw-color-primary-50) / <alpha-value>)',
        //   100: 'rgb(var(--tw-color-primary-100) / <alpha-value>)',
        //   200: 'rgb(var(--tw-color-primary-200) / <alpha-value>)',
        //   300: 'rgb(var(--tw-color-primary-300) / <alpha-value>)',
        //   400: 'rgb(var(--tw-color-primary-400) / <alpha-value>)',
        //   500: 'rgb(var(--tw-color-primary-500) / <alpha-value>)',
        //   600: 'rgb(var(--tw-color-primary-600) / <alpha-value>)',
        //   700: 'rgb(var(--tw-color-primary-700) / <alpha-value>)',
        //   800: 'rgb(var(--tw-color-primary-800) / <alpha-value>)',
        //   900: 'rgb(var(--tw-color-primary-900) / <alpha-value>)',
        // },
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
  plugins: [require('@tailwindcss/forms')],
};
