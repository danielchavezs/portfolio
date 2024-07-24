import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBase: 'hsl(202, 60%, 13%)',
      },
      backgroundImage: {
        'gradient-to-dark': 'linear-gradient(to bottom, hsl(202, 60%, 13%), hsl(202, 60%, 16%))',
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      textColor: {
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;
