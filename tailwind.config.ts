import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        brand: {
          primary: "#2563eb", // blue-600
          secondary: "#7c3aed", // violet-600
          accent: "#0891b2", // cyan-600
        },
        // Semantic colors
        background: {
          DEFAULT: "#ffffff",
          secondary: "#f9fafb", // gray-50
          tertiary: "#f3f4f6", // gray-100
        },
        foreground: {
          DEFAULT: "#0f172a", // slate-900
          secondary: "#475569", // slate-600
          tertiary: "#94a3b8", // slate-400
        },
        border: {
          DEFAULT: "#e2e8f0", // slate-200
          secondary: "#cbd5e1", // slate-300
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Custom typography scale
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },
      spacing: {
        18: "4.5rem",
        112: "28rem",
        128: "32rem",
      },
    },
  },
  plugins: [],
};
export default config;
