import * as React from 'react'

import Hamburger from './Hamburger'
import NavLinks from './NavLinks'

import { defaultTheme, useTheme, ThemeProps } from './theme'
import { useScrollSlide, computeClass } from './utils'
import styles from './styles.css'

const { useState, useRef } = React

interface NavbarProps {
  brand: JSX.Element
  leftLinks?: JSX.Element
  rightLinks?: JSX.Element
  className?: string
  theme?: ThemeProps
  shouldHideOnScroll?: boolean
}

const Navbar: React.FC<NavbarProps> = ({
  brand,
  leftLinks,
  rightLinks,
  theme = defaultTheme,
  className = '',
  shouldHideOnScroll
}) => {
  const [isToggled, toggle] = useState(false)
  const isHidden = useScrollSlide(theme.height, shouldHideOnScroll)
  const navRef = useRef(null)
  useTheme(navRef, theme)

  const navClassName = styles[computeClass(!!isHidden, 'navHidden', 'nav')]
  const shouldShowHamburger = leftLinks || rightLinks

  const onHamburgerClick = () => toggle(!isToggled)

  return (
    <nav
      className={`${navClassName} ${className}`}
      ref={navRef}
      role="navigation"
    >
      {brand}

      {shouldShowHamburger && (
        <Hamburger isToggled={isToggled} onToggle={onHamburgerClick} />
      )}

      <NavLinks
        isOpen={isToggled}
        leftLinks={leftLinks}
        rightLinks={rightLinks}
      />
    </nav>
  )
}

export default Navbar
