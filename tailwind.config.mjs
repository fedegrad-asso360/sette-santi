/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'trail-green': '#5a8a6b',
        'trail-brown': '#5e3b20',
        'trail-gold': '#d4af37',
        'trail-sky': '#87a8c3',
      },
      fontFamily: {
        'trail': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}