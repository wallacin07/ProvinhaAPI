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
        white: "var(--white)",
        black: "var(--black)",
        blue: "var(--blue)",
        lightYellow: "var(--lightYellow)",
        yellow: "var(--Yellow)",
        poopYellow: "var(--poopYellow)",
      },
    },
  },
  plugins: [],
};
export default config;
