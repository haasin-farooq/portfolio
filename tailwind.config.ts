import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          primary: "rgba(15, 15, 15, 1)",
          secondary: "rgba(43, 43, 43, 1)",
        },
        gray: {
          light: "rgba(139, 139, 139, 1)",
        },
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
export default config;
