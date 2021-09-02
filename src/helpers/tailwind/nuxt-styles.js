const contentStyles = function (theme) {
  return {
    'h2:hover > a::before, h3:hover > a::before, h4:hover > a::before, h5:hover > a::before': {
      content: '"#"',
      paddingRight: theme('spacing.4'),
      marginLeft: '-1.5rem',
      color: theme('colors.slate'),
      position: 'absolute'
    },
    'h2::before, h3::before, h4::before, h5::before' : {
      content: '" "',
      display: 'block',
      marginTop: '-5rem',
      height: '5rem',
      visibility: 'hidden',
      pointerEvents: 'none'
    }
  }
}

module.exports = {
  contentStyles
}
