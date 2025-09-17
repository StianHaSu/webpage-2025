import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(card|ripple).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "translateY(-20%) translateX(-50%)" },
          "100%": { transform: "translateY(300%) translateX(-50%)" },
        },
      },
      animation: {
        meteor: "meteor var(--duration) var(--delay) ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"),heroui()],
} satisfies Config;
