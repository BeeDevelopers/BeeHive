import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beeblack: '#080808',
      },
      screens: {
        xs: '480px',
        xxs: '320px',
      },
    },
  },
  plugins: [],
};
export default config;
