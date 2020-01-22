import * as React from 'react'

import Hamburger from './Hamburger'
import NavLinks from './NavLinks'

import { defaultTheme, useTheme } from './theme'
import useScrollSlide from './useScrollSlide'
import * as I from './interfaces'

import styles from './styles.css'

const { useState, useRef } = React

const Navbar: React.FC<I.NavbarProps> = ({
  brand,
  leftLinks,
  rightLinks,
  theme = defaultTheme
}) => {
  const [isToggled, toggle] = useState(false)
  const isHidden = useScrollSlide()
  const navRef = useRef(null)
  useTheme(navRef, theme)

  const navClassName = isHidden ? 'navHidden' : 'nav'
  const shouldShowHamburger = leftLinks || rightLinks

  const onHamburgerClick = () => toggle(!isToggled)

  return (
    <nav className={styles[navClassName]} ref={navRef} role="navigation">
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
