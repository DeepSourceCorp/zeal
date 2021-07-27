const FULL_WIDTH_ACTIVE = function (theme) {
  return {
    marginLeft: `-${theme('width.halfScreen')}`,
    marginRight: `-${theme('width.halfScreen')}`,
    left: theme('width.2/4'),
    maxWidth: theme('width.screen'),
    position: 'relative',
    right: theme('width.2/4'),
    width: theme('width.screen')
  }
}

const FULL_WIDTH_INACTIVE = function (theme) {
  return {
    marginLeft: 'unset',
    marginRight: 'unset',
    left: 'unset',
    maxWidth: theme('width.full'),
    height: 'auto',
    position: 'unset',
    right: 'unset',
    width: 'unset'
  }
}

const BEFORE_LIST_ITEM = function (theme, muted = false) {
  return {
    content: '"—"',
    marginRight: theme('spacing.2'),
    width: '0',
    top: '0',
    left: '0',
    height: '0',
    position: 'absolute',
    color: muted ? theme('colors.vanilla.400') : theme('colors.juniper')
  }
}

const DEFAULT = function (theme) {
  return {
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
}

const SMALL_SCREEN_CSS = function (theme) {
  return {
    'ul > li::before': {
      ...BEFORE_LIST_ITEM(theme)
    },
    pre: {
      color: theme('colors.vanilla.400'),
      backgroundColor: theme('colors.ink.200'),
      overflowX: 'auto',
      borderRadius: '0'
    }
  }
}

const LARGE_SCREEN_CSS = function (theme) {
  return {
    'ul > li::before': {
      ...BEFORE_LIST_ITEM(theme)
    },
    'figure img': {
      borderRadius: `${theme('spacing.1')}`
    }
  }
}

const MUTED = function (theme) {
  return {
    'ul > li::before': {
      ...BEFORE_LIST_ITEM(theme, true)
    },
    a: {
      color: theme('colors.vanilla.400'),
      textDecoration: 'normal',
      fontWeight: theme('fontWeight.medium')
    }
  }
}

module.exports = {
  FULL_WIDTH_ACTIVE,
  FULL_WIDTH_INACTIVE,
  BEFORE_LIST_ITEM,
  DEFAULT,
  SMALL_SCREEN_CSS,
  LARGE_SCREEN_CSS,
  MUTED
}
