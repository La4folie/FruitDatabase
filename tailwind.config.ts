import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      "custom-wide": ".33em",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        beace: "rgba(190, 172, 226)",
        "cus-purple": "#1C1529",
        "cus-black": "#0B0810",
      },
    },
  },
  plugins: [],
};
export default config;
