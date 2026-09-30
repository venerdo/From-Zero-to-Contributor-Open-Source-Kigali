/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--c-ink)', deep: 'var(--c-deep)', osk: 'var(--c-osk)', bright: 'var(--c-bright)',
        amber: 'var(--c-amber)', warm: 'var(--c-warm)', muted: 'var(--c-gray)', line: 'var(--c-line)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
