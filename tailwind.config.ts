import type { Config } from 'tailwindcss';

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /button-./ },
  ],
  corePlugins: {
    color: false
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        'primary': 'rgb(210, 38, 48)',
        'gray': {
          800: 'rgb(112, 113, 115)',
          700: 'rgb(141, 141, 143)',
          600: 'rgb(169, 170, 171)',
          500: 'rgb(198, 198, 199)',
          400: 'rgb(212, 212, 213)',
          300: 'rgb(226, 227, 227)',
          200: 'rgb(240, 241, 241)',
          100: 'rgb(248, 248, 248)',
        },
        'blue': {
          800: 'rgb(27, 147, 209)',
          700: 'rgb(73, 169, 218)',
          600: 'rgb(118, 190, 227)',
          500: 'rgb(164, 212, 237)',
          400: 'rgb(186, 222, 241)',
          300: 'rgb(209, 233, 246)',
          200: 'rgb(232, 244, 250)',
          100: 'rgb(243, 249, 253)',
        },
        'aqua': {
          800: 'rgb(125, 205, 203)',
          700: 'rgb(151, 215, 213)',
          600: 'rgb(177, 225, 224)',
          500: 'rgb(203, 235, 234)',
          400: 'rgb(216, 240, 239)',
          300: 'rgb(229, 245, 245)',
          200: 'rgb(242, 250, 250)',
          100: 'rgb(248, 252, 252)',
        },
        'green': {
          800: 'rgb(131, 189, 86)',
          700: 'rgb(141, 204, 105)',
          600: 'rgb(170, 217, 143)',
          500: 'rgb(198, 229, 180)',
          400: 'rgb(212, 236, 199)',
          300: 'rgb(227, 242, 218)',
          200: 'rgb(241, 248, 236)',
          100: 'rgb(248, 252, 245)',
        },
        'orange': {
          800: 'rgb(229, 152, 54)',
          700: 'rgb(245, 169, 51)',
          600: 'rgb(247, 191, 102)',
          500: 'rgb(250, 212, 153)',
          400: 'rgb(251, 223, 178)',
          300: 'rgb(252, 234, 204)',
          200: 'rgb(254, 244, 229)',
          100: 'rgb(254, 250, 242)',
        },
        'dark': '#14151C',
        'black': '#000000',
        'white': '#ffffff',
        'transparent': 'transparent',
        'inherit': 'inherit'
      },
      fontFamily: {
        'sans': ['var(--font-lato)', ...defaultTheme.fontFamily.sans],
        lato: ['var(--font-lato)'],
        roboto: ['var(--font-roboto-slab)'],
      },
      typography: (theme: Function) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '900',
            },
            '--tw-prose-invert-lead': theme('colors.white'),
            '--tw-prose-invert-body': theme('colors.white'),
            '--tw-prose-body': theme('colors.black'),
            iframe: {
              width: '100%'
            },
            'iframe[src^="https://www.youtube"]': {
              aspectRatio: '16/9'
            },
            a: {
              color: theme('colors.primary')
            },
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
            '.lead': {
              fontSize: theme('fontSize.2xl'),
              lineHeight: 1.5,
            },
            '.large-text': {
              fontSize: theme('fontSize.xl'),
              lineHeight: 1.5,
            }
          },
        },
        lg: {
          css: {
            '.lead': {
              fontSize: theme('fontSize.3xl'),
              lineHeight: 1.5,
            },
            '.large-text': {
              fontSize: theme('fontSize.2xl'),
              lineHeight: 1.5,
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
} satisfies Config

