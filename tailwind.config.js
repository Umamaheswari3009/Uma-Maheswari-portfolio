/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b1220',
        surface: {
          DEFAULT: '#121b2e',
          raised: '#16233a',
        },
        border: {
          DEFAULT: '#223252',
          soft: '#1b2841',
        },
        accent: {
          DEFAULT: '#5eead4',
          warm: '#f4a261',
          dim: '#2c7a6c',
        },
        text: {
          primary: '#e7ecf3',
          secondary: '#9fb0c9',
          muted: '#647391',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Segoe UI', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
}
