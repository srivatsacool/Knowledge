/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        paper: {
          50: '#FAF8F5',
          100: '#FAF7F0',
          200: '#F4EEDD',
          300: '#E8DFCA',
          400: '#D5C7A3',
          card: '#FFFFFF',
          darkCard: '#1C1917',
          darkBg: '#0C0A09',
        },
        ink: {
          900: '#1C1917',
          800: '#292524',
          700: '#44403C',
          600: '#57534E',
          500: '#78716C',
          400: '#A8A29E',
          muted: '#78716C',
        },
        editorial: {
          navy: '#1E3A8A',
          amber: '#B45309',
          emerald: '#047857',
          rose: '#BE123C',
          border: '#E7E5E4',
          borderDark: '#292524',
        }
      },
      fontFamily: {
        serif: ['"Libre Bodoni"', '"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Public Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        paper: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'paper-md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'paper-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
};
