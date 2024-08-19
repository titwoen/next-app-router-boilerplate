import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";

import designSystem from "./src/utils/designSystem";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: "'Quicksand', sans-serif",
      },
    },
  },
  plugins: [
    createThemes(() => {
      return {
        light: designSystem.designSystemTW.light,
        dark: designSystem.designSystemTW.dark,
      };
    }),
  ],
};
export default config;
