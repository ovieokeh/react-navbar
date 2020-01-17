import PropTypes from 'prop-types'

export const NavLinkProp = PropTypes.shape({
  to: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string
})

export const NavigationAuthLinksProps = {
  isAuth: PropTypes.bool,
  authLinks: PropTypes.arrayOf(NavLinkProp),
  nonAuthLinks: PropTypes.arrayOf(NavLinkProp),
  mainColor: PropTypes.string
}

export const NavigationChildProps = {
  links: PropTypes.arrayOf(NavLinkProp),
  mainColor: PropTypes.string
}

export const NavigationBrandProps = {
  route: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export const HamburgerProps = {
  barColor: PropTypes.string.isRequired,
  mainColor: PropTypes.string.isRequired,
  onToggle: PropTypes.func
}

export const NavigationLinksProps = {
  isOpen: PropTypes.bool.isRequired,
  mainColor: PropTypes.string.isRequired,
  infoLinks: PropTypes.arrayOf(NavLinkProp),
  authLinks: PropTypes.arrayOf(NavLinkProp),
  nonAuthLinks: PropTypes.arrayOf(NavLinkProp)
}

export const NavbarProps = {
  brand: PropTypes.string.isRequired,
  infoLinks: PropTypes.arrayOf(NavLinkProp),
  nonAuthLinks: PropTypes.arrayOf(NavLinkProp),
  authLinks: PropTypes.arrayOf(NavLinkProp),
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
