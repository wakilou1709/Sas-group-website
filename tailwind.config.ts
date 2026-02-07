import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
        },
        accent: {
          50: '#e6f7f0',
          100: '#b3e6d1',
          200: '#80d6b2',
          300: '#4dc593',
          400: '#1ab574',
          500: '#00a455',
          600: '#008344',
          700: '#006233',
          800: '#004122',
          900: '#002111',
        },
      },
    },
  },
  plugins: [],
};

export default config;
