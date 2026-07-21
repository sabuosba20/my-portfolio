/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        soft: "var(--soft)",
        line: "var(--line)",
        accent: "var(--accent)",
      },
      fontFamily: {
        sans: ['"Manrope Variable"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono Variable"', "ui-monospace", "monospace"],
      },
      borderRadius: {
        panel: "1.5rem",
      },
      zIndex: {
        base: "1",
        nav: "40",
      },
    },
  },
  plugins: [],
};
