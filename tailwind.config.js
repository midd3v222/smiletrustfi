const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter', 
          'var(--font-inter)', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'SF Pro Display', 
          'SF Pro Text',
          'system-ui', 
          'sans-serif'
        ],
        mono: ['JetBrains Mono', 'var(--font-jetbrains-mono)', 'SF Mono', 'monospace'],
        display: [
          'Inter', 
          'var(--font-inter)', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'SF Pro Display', 
          'system-ui', 
          'sans-serif'
        ],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.01em' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.02em' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.03em' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.04em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.05em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.06em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.07em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.08em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.09em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.1em' }],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
