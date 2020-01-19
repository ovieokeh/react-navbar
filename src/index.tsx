import * as React from 'react'

import NavBrand from './NavBrand'
import Hamburger from './Hamburger'
import NavLinks from './NavLinks'

import ThemeContext, { defaultTheme, useTheme } from './themeContext'
import useScrollSlide from './useScrollSlide'
import { NavbarProps } from './interfaces'

import styles from './styles.css'

const { useState } = React

const Navbar: React.FC<NavbarProps> = ({
  brand,
  leftLinks,
  rightLinks,
  theme
}) => {
  const [isToggled, toggle] = useState(false)
  const isHidden = useScrollSlide()
  useTheme(theme)

  const navClassName = isHidden ? 'navHidden' : 'nav'

  const onHamburgerClick = () => toggle(!isToggled)

  return (
    <ThemeContext.Provider value={defaultTheme}>
      <nav className={styles[navClassName]} role="navigation">
        <NavBrand route="/" brand={brand} />

        <Hamburger isToggled={isToggled} onToggle={onHamburgerClick} />

        <NavLinks
          isOpen={isToggled}
          leftLinks={leftLinks}
          rightLinks={rightLinks}
        />
      </nav>
    </ThemeContext.Provider>
  )
}

export default Navbar
