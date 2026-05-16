/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-0': '#060912',
        'bg-1': '#0a1124',
        'bg-2': '#101a36',
        'bg-3': '#18244a',
        'text-1': '#e6ecf6',
        'text-2': '#9fb0c9',
        'text-3': '#6c7b96',
        'text-dim': '#4a5775',
        'neon-cyan': '#22d3ee',
        'neon-cyan-2': '#67e8f9',
        'neon-blue': '#60a5fa',
        'neon-purple': '#a78bfa',
        'neon-emerald': '#34d399',
        'neon-amber': '#fbbf24',
        'neon-rose': '#fb7185',
      },
      fontFamily: {
        display: ['Sora', 'Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        pixel: ['VT323', '"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '18px',
        xl: '24px',
      },
      maxWidth: {
        shell: '1280px',
      },
    },
  },
  plugins: [],
};
