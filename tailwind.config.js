const plugin = require('tailwindcss/plugin')
const {
  FULL_WIDTH_ACTIVE,
  FULL_WIDTH_INACTIVE,
  BEFORE_LIST_ITEM,
  SMALL_SCREEN_CSS,
  LARGE_SCREEN_CSS
} = require('./src/helpers/tailwind/typography.js')
const colors = require('./src/helpers/tailwind/colors.js')
module.exports = {
  purge: [],
  prefix: '',
  important: false,
  presets: [],
  darkMode: false, // or 'media' or 'class',
  separator: ':',
  theme: {
    screens: {
      xs: '321px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: colors,
    gradients: (theme) => ({
      ocean: ['98.66deg', `${theme('colors.sea-glass')} 9.7%`, `${theme('colors.aqua')} 96.6%`],
      galaxy: {
        type: 'radial',
        colors: [
          '60.53% 61.06% at 68.85% 57.59%',
          `${theme('colors.robin')}75 0%`,
          `${theme('colors.lilac')}29 55.73%`,
          `${theme('colors.vanilla.100')}00 100%`
        ]
      },
      dawn: ['98.66deg', `${theme('colors.robin')} 4.42%`, `${theme('colors.lilac')} 96.6%`],
      'dark-dawn': {
        custom: `linear-gradient(180deg, ${theme('colors.ink.400')} 0%, rgba(22, 24, 29, 0.7) 100%), 
          linear-gradient(98.66deg, ${theme('colors.robin')} 4.42%, ${theme('colors.lilac')} 96.6%)`
      },
      splash: ['98.66deg', `${theme('colors.robin')} 4.42%`, '#3450AF 96.6%'],
      skeleton: [
        '104.58deg',
        `${theme('colors.ink.300')} 0%`,
        `${theme('colors.ink.200')} 40.08%`,
        `${theme('colors.ink.300')} 60.32%`
      ],
      juniper: ['0deg', `${theme('colors.transparent')} 0%`, `${theme('colors.juniper')} 100%`]
    }),
    backdropFilter: (theme) => ({
      none: 'none',
      blur: `blur(${theme('spacing.2')})`
    }),
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      15: '3.75rem',
      16: '4rem',
      17: '4.25rem',
      20: '5rem',
      22: '5.5rem',
      23: '5.75rem',
      24: '6rem',
      26: '6.5rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      102: '32rem'
    },
    backgroundColor: (theme) => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))'
    },
    backgroundOpacity: (theme) => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '400%': '400%'
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      DEFAULT: theme('colors.slate', 'currentColor')
    }),
    borderOpacity: (theme) => theme('opacity'),
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.375rem',
      xl: '0.625rem',
      full: '9999px'
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
      white: '0px 0px 2px 0px rgba(255,255,255,1)',
      black: '1px 4px 20px rgba(0, 0, 0, 0.44)',
      grey: '0px 2px 6px rgba(0, 0, 0, 0.3)',
      z1: '2px 2px 6px 0px #050D21 20%',
      z2: '4px 10px 15px 2px #050D21 20%',
      z3: '6px 15px 20px 5px #050D21 30%',
      'inner-z1': '2px 2px 6px 2px #050D21 20% inset',
      'inner-z2': '-1px -1px 12px 0px #9A9A9A 10% inset',
      'double-dark': '0px 18px 51px rgba(0, 0, 0, 0.26), 0px 2.25388px 6.38599px rgba(0, 0, 0, 0.13)'
    },
    container: {
      padding: {
        DEFAULT: '0rem',
        sm: '1rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '5rem'
      }
    },
    cursor: {
      auto: 'auto',
      DEFAULT: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed'
    },
    divideColor: (theme) => theme('borderColor'),
    divideOpacity: (theme) => theme('borderOpacity'),
    divideWidth: (theme) => theme('borderWidth'),
    fill: (theme) => ({
      ...theme('colors'),
      current: 'currentColor'
    }),
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexGrow: {
      0: '0',
      DEFAULT: '1'
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1'
    },
    fontFamily: {
      sans: [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['ui-monospace', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },
    fontSize: {
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.375rem',
      '1.5xl': '1.5rem',
      '2xl': '1.75rem',
      '2.5xl': '2rem',
      '3xl': '2.75rem',
      '4xl': '4rem',
      '5xl': ['4.5rem', { lineHeight: '1' }],
      '6xl': ['6rem', { lineHeight: '1' }],
      '7xl': ['8rem', { lineHeight: '1' }]
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900'
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      full: '100%',
      screen: '100vh'
    }),
    inset: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      full: '100%',
      '-1/2': '-50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      '-full': '-100%',
      7: '1.75rem',
      auto: 'auto',
      50: '50%'
    }),
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      snug: '-0.008em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
      'widest-lg': '0.15em'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.875rem',
      4: '1rem',
      5: '1.125rem',
      6: '1.25rem',
      7: '1.375rem',
      8: '1.5rem',
      9: '1.75rem',
      10: '2rem',
      11: '3.5rem',
      12: '5rem'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    maxHeight: (theme) => ({
      ...theme('spacing'),
      full: '100%',
      screen: '100vh'
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      ...breakpoints(theme('screens'))
    }),
    minHeight: (theme) => ({
      0: '0',
      '1/2': '50%',
      full: '100%',
      screen: '100vh',
      ...theme('spacing')
    }),
    minWidth: (theme) => ({
      0: '0',
      '1/2': '50%',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      ...theme('spacing')
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12'
    },
    outline: (theme) => ({
      none: ['2px solid transparent', '2px'],
      white: ['2px dotted white', '2px'],
      black: ['2px dotted black', '2px'],
      'ink-100': [`1px solid ${theme('colors.ink.100')}`, '0px'],
      'ink-200': [`1px solid ${theme('colors.ink.200')}`, '0px'],
      'ink-300': [`1px solid ${theme('colors.ink.300')}`, '0px'],
      'ink-400': [`1px solid ${theme('colors.ink.400')}`, '0px']
    }),
    padding: (theme) => theme('spacing'),
    placeholderColor: (theme) => theme('colors'),
    placeholderOpacity: (theme) => theme('opacity'),
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    stroke: (theme) => ({
      ...theme('colors'),
      current: 'currentColor'
    }),
    strokeWidth: {
      0: '0',
      1: '1',
      1.5: '1.5',
      2: '2'
    },
    textColor: (theme) => theme('colors'),
    textOpacity: (theme) => theme('opacity'),
    width: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      100: '30rem',
      120: '42rem',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      halfScreen: '50vw'
    }),
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      1000: '1000'
    },
    gap: (theme) => theme('spacing'),
    gradientColorStops: (theme) => theme('colors'),
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)'
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)'
    },
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',

      'fr-fr-8': '1fr 1fr minmax(auto, 8rem)',
      'fr-fr-10': '1fr 1fr minmax(auto, 10rem)',
      'fr-fr-12': '1fr 1fr minmax(auto, 12rem)',
      'fr-fr-16': '1fr 1fr minmax(auto, 16rem)',
      'fr-fr-20': '1fr 1fr minmax(auto, 20rem)',
      'fr-fr-22': '1fr 1fr minmax(auto, 22rem)',
      'fr-fr-24': '1fr 1fr minmax(auto, 24rem)',

      'fr-8': '1fr minmax(auto, 8rem)',
      'fr-10': '1fr minmax(auto, 10rem)',
      'fr-12': '1fr minmax(auto, 12rem)',
      'fr-16': '1fr minmax(auto, 16rem)',
      'fr-20': '1fr minmax(auto, 20rem)',
      'fr-22': '1fr minmax(auto, 22rem)',
      'fr-24': '1fr minmax(auto, 24rem)',

      '8-fr': 'minmax(auto, 8rem) 1fr',
      '12-fr': 'minmax(auto, 12rem) 1fr',
      '16-fr': 'minmax(auto, 16rem) 1fr',
      '20-fr': 'minmax(auto, 20rem) 1fr',
      '22-fr': 'minmax(auto, 22rem) 1fr',
      '24-fr': 'minmax(auto, 24rem) 1fr',

      footer: 'repeat(5, 1fr) 2fr 1.5fr'
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1'
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13'
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13'
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      footer: 'auto 15%'
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1'
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7'
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7'
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left'
    },
    ringColor: (theme) => ({
      DEFAULT: theme('colors.blue.500', '#3b82f6'),
      ...theme('colors')
    }),
    ringOffsetColor: (theme) => theme('colors'),
    ringOffsetWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    ringOpacity: (theme) => ({
      DEFAULT: '0.5',
      ...theme('opacity')
    }),
    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5'
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg'
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      '-1/3': '-33.333333%',
      '-2/3': '-66.666667%',
      '-1/4': '-25%',
      '-2/4': '-50%',
      '-3/4': '-75%',
      full: '100%'
    }),
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg'
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
      'max-height': 'max-height'
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    animation: {
      none: 'none',
      fadeIn: 'fadeIn 1s',
      fadeInFast: 'fadeIn 0.5s',
      expand: 'expand 1s',
      spin: 'spin 1s linear infinite',
      'first-half-spin': 'first-half-spin 0.5s',
      'reverse-half-spin': 'reverse-half-spin 0.5s',
      'first-quarter-spin': 'first-quarter-spin 0.5s',
      'reverse-quarter-spin': 'reverse-quarter-spin 0.5s',
      gradient: 'gradient 30s ease infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite',
      'slide-left-enter-active': 'slide-left-in 0.5s ease-out',
      'slide-left-leave-active': 'slide-left-out 0.5s ease-out',
      'slide-right-enter-active': 'slide-right-in 0.5s ease-out',
      'slide-right-leave-active': 'slide-right-out 0.5s ease-out',
      'slide-bottom-enter-active': 'slide-bottom-in 0.2s ease-out',
      'slide-bottom-leave-active': 'slide-bottom-out 0.2s ease-out'
    },
    keyframes: {
      expand: {
        from: {
          height: '0px'
        },
        to: {
          height: 'auto'
        }
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      },
      spin: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' }
      },
      'first-quarter-spin': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(90deg)' }
      },
      'reverse-quarter-spin': {
        from: { transform: 'rotate(90deg)' },
        to: { transform: 'rotate(0deg)' }
      },
      gradient: {
        '0%': {
          'background-position': '0% 50%'
        },
        '50%': {
          'background-position': '100% 50%'
        },
        '100%': {
          'background-position': '0% 50%'
        }
      },
      'first-half-spin': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(180deg)' }
      },
      'reverse-half-spin': {
        from: { transform: 'rotate(180deg)' },
        to: { transform: 'rotate(0deg)' }
      },
      ping: {
        '0%': { transform: 'scale(1)', opacity: '1' },
        '75%, 100%': { transform: 'scale(2)', opacity: '0' }
      },
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '.5' }
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
        },
        '50%': {
          transform: 'translateY(0)',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
        }
      },
      'slide-right-out': {
        from: {
          transform: 'translateX(0%)'
        },
        to: {
          transform: 'translateX(-100%)'
        }
      },
      'slide-right-in': {
        from: {
          transform: 'translateX(100%)'
        },
        to: {
          transform: 'translateX(0%)'
        }
      },
      'slide-left-in': {
        from: {
          transform: 'translateX(-100%)'
        },
        to: {
          transform: 'translateX(0%)'
        }
      },
      'slide-left-out': {
        from: {
          transform: 'translateX(0%)'
        },
        to: {
          transform: 'translateX(100%)'
        }
      },
      'slide-bottom-in': {
        from: {
          transform: 'translateY(100%)'
        },
        to: {
          transform: 'translateY(0%)'
        }
      },
      'slide-bottom-out': {
        from: {
          transform: 'translateY(0%)'
        },
        to: {
          transform: 'translateY(100%)'
        }
      }
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.vanilla.100'),
            '[class~="lead"]': {
              color: theme('colors.vanilla.400')
            },
            a: {
              color: theme('colors.juniper'),
              textDecoration: 'normal',
              fontWeight: theme('fontWeight.medium')
            },
            'a:hover': {
              textDecoration: 'underline'
            },
            strong: {
              color: theme('colors.vanilla.100'),
              fontWeight: theme('fontWeight.semibold')
            },
            'ol > li': {
              position: 'relative'
            },
            'ol > li::before': {
              content: 'counter(list-item) "."',
              position: 'absolute',
              fontWeight: theme('fontWeight.normal'),
              color: theme('colors.vanilla.400')
            },
            ul: {
              listStyleType: 'none',
              listStyle: 'none'
            },
            'ul > li': {
              position: 'relative'
            },
            'ul > li::before': {
              ...BEFORE_LIST_ITEM(theme)
            },
            hr: {
              borderColor: theme('colors.ink.100'),
              borderTopWidth: 1
            },
            blockquote: {
              fontWeight: theme('fontWeight.medium'),
              lineHeight: theme('lineHeight.normal'),
              fontSize: theme('fontSize.lg'),
              fontStyle: 'normal',
              color: 'inherit',
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.juniper'),
              quotes: '"\\201C""\\201D""\\2018""\\2019"'
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote'
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote'
            },
            'h1, h2, h3, h4, h5': {
              color: theme('colors.vanilla.100')
            },
            'h1::before, h2::before, h3::before, h4::before, h5::before': {
              content: '"#"',
              marginRight: theme('spacing.2'),
              color: theme('colors.slate')
            },
            h1: {
              fontWeight: theme('fontWeight.bold')
            },
            h2: {
              fontWeight: theme('fontWeight.semibold')
            },
            'h3, h4, h5': {
              fontWeight: theme('fontWeight.medium')
            },
            'figure figcaption': {
              color: theme('colors.vanilla.400'),
              textAlign: 'center',
              [`@media (min-width: ${theme('screens.sm')})`]: {
                textAlign: 'left'
              }
            },
            'pre, figure img': {
              ...FULL_WIDTH_INACTIVE(theme)
            },
            'figure img': {
              borderRadius: `${theme('spacing.1')}`
            },
            code: {
              color: theme('colors.vanilla.300'),
              fontWeight: theme('fontWeight.semibold')
            },
            'code::before, code::after': {
              content: '"`"'
            },
            'a code': {
              color: theme('colors.juniper')
            },
            pre: {
              color: theme('colors.vanilla.400'),
              backgroundColor: theme('colors.ink.200'),
              overflowX: 'auto',
              borderRadius: `${theme('spacing.1')}`
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: theme('fontWeight.normal'),
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit'
            },
            'pre code::before, pre code::after': {
              content: '""'
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left'
            },
            thead: {
              color: theme('colors.vanilla.400')
            },
            'thead th': {
              fontWeight: theme('fontWeight.medium'),
              verticalAlign: 'bottom'
            },
            'thead, tbody tr': {
              borderBottomWidth: theme('spacing.px'),
              borderBottomColor: theme('colors.ink.100')
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0'
            },
            'tbody td': {
              verticalAlign: 'top'
            }
          }
        },
        sm: {
          css: {
            ...SMALL_SCREEN_CSS(theme)
          }
        },
        lg: {
          css: {
            ...LARGE_SCREEN_CSS(theme)
          }
        },
        xl: {
          css: {
            ...LARGE_SCREEN_CSS(theme)
          }
        },
        '2xl': {
          css: {
            ...LARGE_SCREEN_CSS(theme)
          }
        }
      })
    }
  },
  variantOrder: [
    'first',
    'last',
    'odd',
    'even',
    'visited',
    'checked',
    'group-hover',
    'group-focus',
    'focus-within',
    'hover',
    'focus',
    'focus-visible',
    'active',
    'disabled'
  ],
  variants: {
    accessibility: ['responsive', 'focus', 'focus-within'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus', 'sibling-checked', 'group-hover', 'dark', 'focus-within'],
    backgroundImage: ['responsive'],
    backgroundOpacity: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within', 'no-filter'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus', 'group-hover', 'sibling-checked', 'dark', 'focus-within'],
    borderOpacity: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive', 'last', 'first'],
    borderStyle: ['responsive', 'last', 'first'],
    borderWidth: ['responsive', 'even', 'last', 'first'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
    boxSizing: ['responsive'],
    container: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive', 'group-hover'],
    divideColor: ['responsive', 'group-hover', 'dark'],
    divideOpacity: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive', 'hover'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus', 'group-hover'],
    fontVariantNumeric: ['responsive'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus', 'disabled', 'group-hover', 'focus-within'],
    order: ['responsive'],
    outline: ['responsive', 'focus', 'focus-within'],
    overflow: ['responsive', 'hover'],
    overscrollBehavior: ['responsive', 'hover'],
    padding: ['responsive'],
    placeContent: ['responsive'],
    placeItems: ['responsive'],
    placeSelf: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    placeholderOpacity: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    ringColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetColor: ['responsive', 'dark', 'focus-within', 'focus'],
    ringOffsetWidth: ['responsive', 'focus-within', 'focus'],
    ringOpacity: ['responsive', 'focus-within', 'focus'],
    ringWidth: ['responsive', 'focus-within', 'focus'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus', 'sibling-checked', 'focus-within', 'dark'],
    textOpacity: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
    textDecoration: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    textOverflow: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    gradientColorStops: ['responsive', 'dark', 'hover', 'focus'],
    gridAutoColumns: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridAutoRows: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
    animation: ['responsive'],
    backdropFilter: ['responsive']
  },
  corePlugins: {},
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('no-filter', ({ container, separator }) => {
        const supportsRule = postcss.atRule({
          name: 'supports',
          params: 'not (backdrop-filter: blur(1px))'
        })
        supportsRule.append(container.nodes)
        container.append(supportsRule)
        supportsRule.walkRules((rule) => {
          rule.selector = `.${e(`no-filter${separator}${rule.selector.slice(1)}`)}`
        })
      })
    }),
    plugin(function ({ addVariant }) {
      addVariant('sibling-checked', ({ container }) => {
        container.walkRules((rule) => {
          rule.selector = `:checked ~ .sibling-checked\\:${rule.selector.slice(1)}`
        })
      })
    }),
    plugin(({ addVariant, e }) => {
      addVariant('before', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`before${separator}${className}`)}::before`
        })
      })
      addVariant('after', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`after${separator}${className}`)}::after`
        })
      })
    }),
    plugin(({ addUtilities }) => {
      const contentUtilities = {
        '.content': {
          content: 'attr(data-content)',
          position: 'absolute'
        },
        '.content-before': {
          content: 'attr(data-before)',
          position: 'absolute'
        },
        '.content-after': {
          content: 'attr(data-after)',
          position: 'absolute'
        }
      }
      addUtilities(contentUtilities, ['before', 'after'])
    }),
    plugin(({ addUtilities, e, theme }) => {
      const colors = theme('colors')
      const caretColors = Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === 'string') {
          return {
            ...acc,
            [`.caret-${e(key)}`]: {
              'caret-color': colors[key]
            }
          }
        }

        const variants = Object.keys(colors[key])

        return {
          ...acc,
          ...variants.reduce(
            (a, variant) => ({
              ...a,
              [`.caret-${e(key)}-${variant}`]: {
                'caret-color': colors[key][variant]
              }
            }),
            {}
          )
        }
      }, {})
      addUtilities(caretColors)
    }),
    plugin(({ addUtilities, e, theme, variants }) => {
      const utilities = Object.keys(theme('gradients')).map((name) => {
        const gradient = theme('gradients')[name]
        let background = ''
        if (Object.prototype.hasOwnProperty.call(gradient, 'custom')) {
          background = gradient.custom
        } else {
          const type = Object.prototype.hasOwnProperty.call(gradient, 'type') ? gradient.type : 'linear'
          const colors = Object.prototype.hasOwnProperty.call(gradient, 'colors') ? gradient.colors : gradient
          background = `${type}-gradient(${colors.join(', ')})`
        }

        return {
          [`.bg-gradient-${e(name)}`]: {
            backgroundImage: background
          }
        }
      })

      addUtilities(utilities, variants('gradients', []))
    }),
    plugin(({ addUtilities, theme }) => {
      const utilities = {
        '.w-full-screen': {
          ...FULL_WIDTH_ACTIVE(theme)
        },
        '.w-full-screen-none': {
          ...FULL_WIDTH_INACTIVE(theme)
        }
      }

      addUtilities(utilities, ['responsive'])
    }),
    plugin(({ theme, variants, e, addUtilities }) => {
      const backdropFilterUtilities = Object.keys(theme('backdropFilter')).map((type) => {
        const backdropFilter = theme('backdropFilter')[type]
        return {
          [`.backdrop-${e(type)}`]: {
            backdropFilter: backdropFilter
          }
        }
      })

      addUtilities(backdropFilterUtilities, variants('backdropFilter'))
    }),
    plugin(({ addUtilities, theme }) => {
      const individualBorderColors = []
      const traverseObject = (obj, prevKey) => {
        Object.keys(obj).forEach((key) => {
          let colorName = `${prevKey}${prevKey && '-'}${key}`
          individualBorderColors.push({
            [`.border-b-${colorName}`]: {
              borderBottomColor: obj[key]
            },
            [`.border-t-${colorName}`]: {
              borderTopColor: obj[key]
            },
            [`.border-l-${colorName}`]: {
              borderLeftColor: obj[key]
            },
            [`.border-r-${colorName}`]: {
              borderRightColor: obj[key]
            }
          })

          if (typeof obj[key] === 'object') {
            traverseObject(obj[key], key)
          }
        })
      }
      traverseObject(theme('colors'), '')

      addUtilities(individualBorderColors, ['responsive', 'before', 'after'])
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.filter-none': {
          filter: 'none'
        },
        '.filter-grayscale': {
          filter: 'grayscale(1)'
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ]
}
