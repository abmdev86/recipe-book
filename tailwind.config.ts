import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      nutmeg: "hsl(14,45%,36%)",
      dark_raspberry: "hsl(332, 51%, 32%)",
      rose_white: "hsl(330, 100%, 98%)",
      eggshell: "hsl(30, 54%, 90%)",
      grey: "hsl(30, 18%, 87%)",
      wenge_brown: "hsl(30, 10%, 34%)",
      dark_charcoal: "hsl(24, 5%, 18%)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
