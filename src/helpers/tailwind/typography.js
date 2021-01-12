module.exports = {
  FULL_WIDTH_ACTIVE: function (theme) {
    return {
      marginLeft: `-${theme('width.halfScreen')}`,
      marginRight: `-${theme('width.halfScreen')}`,
      left: theme('width.2/4'),
      maxWidth: theme('width.screen'),
      position: 'relative',
      right: theme('width.2/4'),
      width: theme('width.screen')
    }
  },
  FULL_WIDTH_INACTIVE: function (theme) {
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
  },
  BEFORE_LIST_ITEM: function (theme) {
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
}
