import * as React from 'react'

import NavLink from './NavLink'
import useNoScroll from './useNoScroll'
import { NavLinksProps, NavLinkProp } from '../interfaces'

import styles from './navlinks.css'

const NavLinks: React.FC<NavLinksProps> = ({
  isOpen,
  leftLinks,
  rightLinks
}) => {
  const className = isOpen ? 'navLinksShow' : 'navLinks'

  useNoScroll(isOpen)

  const renderLinks = (links: NavLinkProp[]) =>
    links.map(link => <NavLink key={link.to} link={link} />)

  return (
    <div className={styles[className]}>
      <span className={styles.navLinksGroupLeft}>{renderLinks(leftLinks)}</span>

      <span className={styles.navLinksGroupRight}>
        {renderLinks(rightLinks)}
      </span>
    </div>
  )
}

export default NavLinks
