/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        accent: '#F472B6',
        ink: '#0B0B0F',
        paper: '#0F1115',
        muted: '#94A3B8',
      },
      borderRadius: {
        'md': '10px',
        'xl': '16px',
        '2xl': '24px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tight': '-0.01em',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
