import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-blue": {
        "100": "hsl(209, 23%, 22%)",
        "200": "hsl(207, 26%, 17%)",
        "300": "hsl(200, 15%, 8%)",
      },
      "dark-gray": "hsl(0, 0%, 52%)",
      "light-gray": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%",
    },
    fontSizes: {
      sm: ["0.75rem"],
      base: ["0.875rem", "1rem"],
      lg: ["0.875rem", "1.25rem"],
      xl: ["1rem"],
      "2xl": ["1.125rem", "1.625rem"],
      "3xl": ["1.5rem"],
    },
    extend: {
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
