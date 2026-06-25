/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ploy: {
          'accent-primary': 'oklch(0.548 0.207 263)',
          'accent-primary-300': 'oklch(0.75 0.12 263)',
          'background-primary': 'oklch(1 0 0)',
          'background-secondary': 'oklch(0.969 0.008 248)',
          'neutral-secondary': 'oklch(0.969 0.008 248)',
          'neutral-inverse': 'oklch(0.23 0.04 260)',
          'text-primary': 'oklch(0.23 0.04 260)',
          'text-secondary': 'oklch(0.538 0.024 300)',
          'text-on-accent-primary': 'oklch(1 0 0)',
          'text-inverse': 'oklch(1 0 0)',
          'text-inverse-secondary': 'oklch(0.72 0.02 300)',
          'border-primary': 'oklch(0.8768 0.0064 344)',
          'border-inverse': 'oklch(0.35 0.03 260)',
        },
      },
    },
  },
  plugins: [],
}
