import * as React from 'react'

import Hamburger from './Hamburger'
import NavLinks from './NavLinks'

import { defaultTheme, useTheme, ThemeProps as TProps } from './theme'
import { useScrollSlide, computeClass } from './utils'
import './styles.scss'

const { useState, useRef } = React
interface ThemeProps extends TProps {} // TODO fix rollup [name] is not exported by [module] error

interface NavbarProps {
  brand: JSX.Element
  leftLinks?: JSX.Element
  rightLinks?: JSX.Element
  className?: string
  menuClassName?: string
  theme?: ThemeProps
  shouldHideOnScroll?: boolean
  shouldAnimate?: boolean
}

const Navbar: React.FC<NavbarProps> = ({
  brand,
  leftLinks,
  rightLinks,
  theme = defaultTheme,
  className = '',
  menuClassName = '',
  shouldHideOnScroll = true,
  shouldAnimate = true
}) => {
  const [isToggled, toggle] = useState(false)
  const isHidden = useScrollSlide(theme.height, shouldHideOnScroll)
  const navRef = useRef(null)
  useTheme(navRef, theme)

  const otherClassnames = computeClass(
    shouldAnimate,
    isHidden,
    'nav--animate--hidden',
    'nav--animate',
    'nav--hidden'
  )

  const shouldShowHamburger = leftLinks || rightLinks

  const onHamburgerClick = () => toggle(!isToggled)

  return (
    <nav
      className={`nav ${otherClassnames} ${className}`.trim()}
      ref={navRef}
      role="navigation"
    >
      {brand}

      {shouldShowHamburger && (
        <Hamburger
          isToggled={isToggled}
          shouldAnimate={shouldAnimate}
          onToggle={onHamburgerClick}
        />
      )}

      <NavLinks
        customClassName={menuClassName}
        isOpen={isToggled}
        shouldAnimate={shouldAnimate}
        leftLinks={leftLinks}
        rightLinks={rightLinks}
      />
    </nav>
  )
}

export default Navbar
export { NavbarProps, ThemeProps }
