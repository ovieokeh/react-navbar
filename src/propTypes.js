import PropTypes from 'prop-types'

export const NavLinkProp = PropTypes.shape({
  to: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
})

export const NavigationBrandProps = {
  route: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired
}

export const HamburgerProps = {
  onToggle: PropTypes.func
}

export const NavLinksProps = {
  isOpen: PropTypes.bool.isRequired,
  leftLinks: PropTypes.arrayOf(NavLinkProp),
  rightLinks: PropTypes.arrayOf(NavLinkProp)
}

export const NavbarProps = {
  brand: PropTypes.string.isRequired,
  leftLinks: PropTypes.arrayOf(NavLinkProp),
  rightLinks: PropTypes.arrayOf(NavLinkProp),
  theme: ThemeProps
}

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
