/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9', // Main
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#075985',
        },
        secondary: {
          50: '#FFFAEB',
          100: '#FEEFC6',
          200: '#FEDF89',
          300: '#FFC069',
          400: '#FEC84B',
          500: '#F79009', // Main
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#792E0D',
        },
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A', // Main
        },
        error: {
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDC9',
          300: '#FDA19B',
          400: '#F97066',
          500: '#F04438', // Main
          600: '#D92D20',
          700: '#B32318',
          800: '#912018',
          900: '#7A271A',
        },
        success: {
          50: '#ECFDF3',
          100: '#D1FADF',
          200: '#A6F4C5',
          300: '#6CE9A6',
          400: '#32D583',
          500: '#12B76A', // Main
          600: '#039855',
          700: '#027948',
          800: '#05603A',
          900: '#054F31',
        },
      },
    },
  },
  plugins: [],
}
