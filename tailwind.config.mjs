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
        sans: ['Inter', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
      colors: {
        icon: {
          dark: '#FFFFFF',
          light: '#000000',
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
      },
    },
  },
  plugins: [starlightPlugin()],
};
