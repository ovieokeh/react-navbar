import * as React from 'react'

import useNoScroll from './useNoScroll'
import { NavLinksProps } from '../interfaces'

import styles from './navlinks.css'

const NavLinks: React.FC<NavLinksProps> = ({
  isOpen,
  leftLinks,
  rightLinks
}) => {
  const className = isOpen ? 'navLinksShow' : 'navLinks'

  useNoScroll(isOpen)

  return (
    <div className={styles[className]}>
      <span className={styles.navLinksGroupLeft}>{leftLinks}</span>

      <span className={styles.navLinksGroupRight}>{rightLinks}</span>
    </div>
  )
}

export default NavLinks
