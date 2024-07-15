import colors from 'tailwindcss/colors';
import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontSize: {
        xxs: '0.625rem', // 10px
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem', // 72px
        '8xl': '6rem', // 96px
        '9xl': '8rem', // 128px
      },
      fontFamily: {
        sans: ['Aeonik', 'sans-serif'], // Set Aeonik as the default sans font
      },
      colors: {
        primary: {
          50: '#edf2ff',
          100: '#dee8ff',
          200: '#c3d2ff',
          300: '#9eb4ff',
          400: '#778cff',
          500: '#5864fc',
          600: '#2d2df1',
          700: '#2f2cd6',
          800: '#2727ac',
          900: '#272888',
          950: '#18174f',
        },
        secondary: {
          50: '#f0fdfb',
          100: '#ccfbf5',
          200: '#99f6ec',
          300: '#5fe9e0',
          400: '#2ed3cc',
          500: '#17cac6',
          600: '#0e9393',
          700: '#107375',
          800: '#115c5e',
          900: '#134d4e',
          950: '#042c2f',
        },
        code: {
          light: {
            bg: '#f5f5f5',
            text: '#333333',
            keyword: '#c678dd',
            string: '#98c379',
          },
          dark: {
            bg: '#2d2d2d',
            text: '#ffffff',
            keyword: '#c678dd',
            string: '#98c379',
          },
        },
        accent: colors.indigo,
        gray: colors.zinc,
        teal: '#17CAC6',
      },
    },
  },
  plugins: [starlightPlugin()],
};
