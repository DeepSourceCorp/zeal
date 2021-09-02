const contentStyles = function (theme) {
  return {
    'h2:hover > a::before, h3:hover > a::before, h4:hover > a::before, h5:hover > a::before': {
      content: '"#"',
      paddingRight: theme('spacing.4'),
      marginLeft: '-1.5rem',
      color: theme('colors.slate'),
      position: 'absolute'
    }
  }
}

module.exports = {
  contentStyles
}
