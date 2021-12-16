const { join } = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],

  theme: {
    // screens: {
    //   sm: '375px',
    //   // => @media (min-width: 640px) { ... }

    //   md: '768px',
    //   // => @media (min-width: 768px) { ... }

    //   lg: '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   xl: '1440px',
    //   // => @media (min-width: 1280px) { ... }
    // },

    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        body: 'var(--color-text)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')],
  darkMode: 'media',
};
