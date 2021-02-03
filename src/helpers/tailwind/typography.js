const FULL_WIDTH_ACTIVE = function(theme) {
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
const FULL_WIDTH_INACTIVE = function(theme) {
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
const BEFORE_LIST_ITEM = function(theme) {
  return {
    content: '"—"',
    marginRight: theme('spacing.2'),
    width: '0',
    top: '0',
    left: '0',
    height: '0',
    position: 'absolute',
    color: theme('colors.juniper')
  }
}

module.exports = {
  FULL_WIDTH_ACTIVE,
  FULL_WIDTH_INACTIVE,
  BEFORE_LIST_ITEM,
  SMALL_SCREEN_CSS: function(theme) {
    return {
      'ul > li::before': {
        ...BEFORE_LIST_ITEM(theme)
      },
      'pre, figure img': {
        ...FULL_WIDTH_ACTIVE(theme)
      },
      pre: {
        color: theme('colors.vanilla.400'),
        backgroundColor: theme('colors.ink.200'),
        overflowX: 'auto',
        borderRadius: '0'
      }
    }
  },
  LARGE_SCREEN_CSS: function(theme) {
    return {
      'ul > li::before': {
        ...BEFORE_LIST_ITEM(theme)
      },
      'pre, figure img': {
        ...FULL_WIDTH_INACTIVE(theme)
      },
      pre: {
        color: theme('colors.vanilla.400'),
        backgroundColor: theme('colors.ink.200'),
        overflowX: 'auto',
        borderRadius: `${theme('spacing.1')}`
      },
      'figure img': {
        borderRadius: `${theme('spacing.1')}`
      }
    }
  }
}
