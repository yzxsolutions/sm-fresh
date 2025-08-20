/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22c55e',
          dark: '#16a34a',
          light: '#86efac',
        },
        secondary: {
          DEFAULT: '#f97316',
          dark: '#ea580c',
          light: '#fed7aa',
        },
        accent: {
          DEFAULT: '#eab308',
          dark: '#ca8a04',
          light: '#fef3c7',
        },
        background: '#ffffff',
        foreground: '#1f2937',
        muted: {
          DEFAULT: '#f9fafb',
          foreground: '#6b7280',
        },
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
};