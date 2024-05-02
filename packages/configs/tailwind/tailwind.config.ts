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
        beeblue: '#0E5287',
        beeyellow: '#E4C565',
        beeorange: '#DAAE67',
        beered: '#FB3B5C',
        beewhite: '#EFF7FE',
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
