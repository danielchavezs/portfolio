import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'xs': '375px', // Añadir un nuevo punto de quiebre para móviles pequeños
        'sm': '320px',
        'md': '480px',
        'lg': '900px',
        // 'xl': '1280px',
        // '2xl': '1536px',
      },
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
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
