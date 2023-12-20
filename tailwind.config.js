/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'heropattern': "url('assets/images/webp/hero_sec_bg.webp')",
        'atributotexture': "url('assets/images/webp/white_bg.webp')",
        'jackpottexture': "url('assets/images/webp/jackpot-layer.webp')",
        'portexture': "url('assets/images/webp/white_small_bg_layer.webp')",
        'silvertexture': "url('assets/images/webp/silver-layer.webp')",
        'luxurytexture': "url('assets/images/webp/gradientwithimg.webp')",
      },
      backgroundSize: {
        'full': '100% 100%',
      }
    },
  },
  plugins: [],
}

