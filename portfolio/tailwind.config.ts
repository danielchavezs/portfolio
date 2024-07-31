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
        darkBase: 'hsl(202, 60%, 10%)',
      },
      backgroundImage: {
        'custom-background': "url('https://images.pexels.com/photos/957061/milky-way-starry-sky-night-sky-star-957061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'gradient-overlay': "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1))",
        'gradient-to-dark': 'linear-gradient(to bottom, hsl(202, 60%, 10%), hsl(202, 60%, 12%))',
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
