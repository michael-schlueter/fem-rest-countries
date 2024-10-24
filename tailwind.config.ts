import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-blue": {
        "100": "hsl(209, 23%, 22%)",
        "200": "hsl(207, 26%, 17%)",
        "300": "hsl(200, 15%, 8%)",
        "400": "hsl(209, 23%, 22%)",
      },
      "dark-gray": "hsl(0, 0%, 52%)",
      gray: "hsl(0, 0%, 70%)",
      "dim-gray": "hsl(0, 0%, 77%)",
      "light-gray": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      sm: ["0.75rem", "0.75rem"],
      xm: ["0.75rem", "1rem"],
      xs: ["0.75rem", "1.25rem"],
      base: ["0.875rem", "1rem"],
      lg: ["0.875rem", "1.25rem"],
      xl: ["1rem", "1rem"],
      "2xl": ["1.125rem", "1.625rem"],
      "3xl": ["1.5rem", "1.5rem"],
    },
    extend: {
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        'custom': '0 0 7px 2px rgba(0,0,0,0.0294)',
        'custom-2': '0 2px 4px 0 rgba(0,0,0,0.0562)',
        'custom-3': '0 2px 9px 0 rgba(0,0,0,0.0532)',
        'custom-4': '0 0 7px 0 rgba(0,0,0,0.2931)',
        'custom-5': '0 0 4px 1px rgba(0,0,0,0.1049)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
