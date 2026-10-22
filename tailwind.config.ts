import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "media",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Values live in app/globals.css so they can switch with the color scheme
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        // Secondary text: roles, excerpts, body copy under a heading
        muted: "rgb(var(--muted) / <alpha-value>)",
        // Tertiary text: dates, labels, metadata
        subtle: "rgb(var(--subtle) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          hover: "rgb(var(--accent-hover) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
