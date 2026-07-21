import defaultTheme from "tailwindcss/defaultTheme.js";

/** @type {import('tailwindcss').Config} */
export default {
  // Modo oscuro controlado por la clase `.dark` en <html> (toggle + anti-flash).
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      // ── Tokens semánticos mapeados a variables CSS (canales RGB) ──
      // El `<alpha-value>` permite usar opacidades: bg-surface/50, border-line/10, etc.
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        line: "rgb(var(--border) / <alpha-value>)",
        fg: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",
        faint: "rgb(var(--text-faint) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-2": "rgb(var(--accent-2) / <alpha-value>)",
        "accent-3": "rgb(var(--accent-3) / <alpha-value>)",
      },
      fontFamily: {
        // Cuerpo: Onest (ya instalada). Titulares: Space Grotesk (geométrica).
        sans: ["Onest Variable", ...defaultTheme.fontFamily.sans],
        display: ["Space Grotesk Variable", ...defaultTheme.fontFamily.sans],
      },
      // ── Escala tipográfica fluida con clamp() ──
      fontSize: {
        "fluid-hero": [
          "clamp(2.5rem, 6vw + 1rem, 5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.03em" },
        ],
        "fluid-h2": [
          "clamp(1.75rem, 3vw + 0.5rem, 2.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
      },
      backgroundImage: {
        // Gradiente de acento reutilizable (violeta → índigo → cian sutil).
        "accent-gradient":
          "linear-gradient(120deg, rgb(var(--accent)), rgb(var(--accent-2)), rgb(var(--accent-3)))",
      },
      keyframes: {
        "fade-in-y": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
        // Aurora del fondo: deriva lenta de posición y escala.
        aurora: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(4%, -3%, 0) scale(1.08)" },
          "66%": { transform: "translate3d(-3%, 3%, 0) scale(0.96)" },
        },
        // Gradiente animado para texto (fondo que se desplaza).
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        // Glow pulsante (badge "Disponible", etc.).
        "glow-pulse": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.4)" },
        },
      },
      animation: {
        "fade-in-y": "fade-in-y 0.6s ease-out forwards",
        aurora: "aurora 22s ease-in-out infinite",
        "gradient-pan": "gradient-pan 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
