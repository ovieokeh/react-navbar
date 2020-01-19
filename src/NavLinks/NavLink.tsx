import * as React from 'react'

import { NavLinkProp } from '../interfaces'

import styles from './navlinks.css'

interface Props {
  link: NavLinkProp
}

const NavLink: React.FC<Props> = ({ link }) => (
  <a className={styles.navLink} href={link.to}>
    {link.text}
  </a>
)

export default NavLink
