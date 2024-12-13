import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royalblue: {
          50: '#f3f3ff',
          100: '#e5e5ff',
          200: '#c7c7ff',
          300: '#a8a8ff',
          400: '#8989ff',
          500: '#3939ff', // Cor base
          600: '#2e2ecc',
          700: '#232399',
          800: '#181866',
          900: '#0d0d33',
          950: '#050514',
        },
        cyan: {
          50: '#e0ffff',
          100: '#b3ffff',
          200: '#80ffff',
          300: '#4dffff',
          400: '#1affff',
          500: '#00ffff', // Cor base
          600: '#00cccc',
          700: '#009999',
          800: '#006666',
          900: '#003333',
          950: '#001a1a',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
