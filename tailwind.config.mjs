import colors from "tailwindcss/colors";
import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Aeonik", "sans-serif"], // Set Aeonik as the default sans font
      },
      colors: {
        primary: {
          50: "#edf2ff",
          100: "#dee8ff",
          200: "#c3d2ff",
          300: "#9eb4ff",
          400: "#778cff",
          500: "#5864fc",
          600: "#2d2df1",
          700: "#2f2cd6",
          800: "#2727ac",
          900: "#272888",
          950: "#18174f",
        },
        secondary: {
          50: "#f0fdfb",
          100: "#ccfbf5",
          200: "#99f6ec",
          300: "#5fe9e0",
          400: "#2ed3cc",
          500: "#17cac6",
          600: "#0e9393",
          700: "#107375",
          800: "#115c5e",
          900: "#134d4e",
          950: "#042c2f",
        },
        accent: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
  plugins: [starlightPlugin()],
};
