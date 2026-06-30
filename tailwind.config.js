/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#F4F4F2',
        surface: '#FFFFFF',
        surfaceAlt: '#FAFAF8',
        ink: '#0F0F0F',
        ink2: '#404040',
        ink3: '#737373',
        ink4: '#A3A3A3',
        line: '#E5E5E3',
        lineSoft: '#EFEFED',
        ok: '#1E7A4D',
        okBg: '#E4F0E8',
        warn: '#9C6A0E',
        warnBg: '#F5EBD5',
        bad: '#A1342A',
        badBg: '#F5DDD7',
        info: '#2A5687',
        accent: '#A1342A',
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'tag': ['10px', { lineHeight: '1', letterSpacing: '0.04em', fontWeight: '600' }],
        'metric-xl': ['28px', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'metric': ['20px', { lineHeight: '1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'metric-sm': ['15px', { lineHeight: '1.1', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
