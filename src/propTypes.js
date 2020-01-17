import PropTypes from 'prop-types'

export const NavLinkProp = PropTypes.shape({
  to: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
})

export const ThemeProps = PropTypes.shape({
  backgroundColor: PropTypes.string,
  mainColor: PropTypes.string,
  shadowColor: PropTypes.string,
  linkColor: PropTypes.string,
  fontFamily: PropTypes.string,
  height: PropTypes.number,
  padding: PropTypes.string,
  transition: {
    entry: {
      duration: PropTypes.number,
      timingFunction: PropTypes.string
    },
    exit: {
      duration: PropTypes.number,
      timingFunction: PropTypes.string
    }
  }
})
