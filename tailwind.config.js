/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      "atkinson": "Atkinson Hyperlegible",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'menu-fade': 'fadeIn 800ms ease-in-out',
        'page-fade': 'fadeIn 1000ms ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeFaster: {
          '0%': { opacity: 0.6 },
          '100%': { opacity: 1 },
        },
      }),
      cursor: {
        'fun': 'url(/images/funtime.png) 32 32, auto',
      }
    },
  },
  plugins: [],
}
