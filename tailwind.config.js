/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        background: '#051424',
        surface: '#051424',
        'surface-dim': '#051424',
        'surface-bright': '#2c3a4c',
        'surface-container-lowest': '#010f1f',
        'surface-container-low': '#0d1c2d',
        'surface-container': '#122131',
        'surface-container-high': '#1c2b3c',
        'surface-container-highest': '#273647',
        'on-surface': '#d4e4fa',
        'on-surface-variant': '#c2c6d6',
        outline: '#8c909f',
        'outline-variant': '#424754',
        primary: '#adc6ff',
        'on-primary': '#002e6a',
        'primary-container': '#4d8eff',
        'on-primary-container': '#00285d',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Geist', 'system-ui', 'sans-serif'],
        tech: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        display: [
          '80px',
          { lineHeight: '1.1', letterSpacing: '-0.04em', fontWeight: '700' },
        ],
        'headline-lg': [
          '48px',
          { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '600' },
        ],
        'headline-md': [
          '24px',
          { lineHeight: '1.4', fontWeight: '500' },
        ],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'tech-label': [
          '13px',
          { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '500' },
        ],
        'code-sm': ['12px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      spacing: {
        gutter: '24px',
        'margin-mobile': '20px',
        'margin-desktop': '64px',
        'section-gap': '120px',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
};
