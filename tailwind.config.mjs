/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'trail-green': '#2d5016',
        'trail-brown': '#8b4513',
        'trail-gold': '#d4af37',
        'trail-sky': '#87ceeb',
      },
      fontFamily: {
        'trail': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}