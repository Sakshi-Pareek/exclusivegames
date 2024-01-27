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
        'fully': '100% 120%',
      },
      boxShadow: {
        "btn_shadow": '2px 5px 10px #ffffff',
        "btn_gradient_shadow2": '0px 3px 5px #5ED6CB',
        "gradient_box": '4px 4px 5px #75F088',
      }
    },
  },
  plugins: [],
}

