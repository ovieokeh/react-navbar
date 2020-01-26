import * as React from 'react'

import { useNoScroll, computeClass } from '../utils'
import styles from './styles.css'

interface NavLinksProps {
  customClassName: string
  isOpen: boolean
  shouldAnimate: boolean
  leftLinks?: JSX.Element
  rightLinks?: JSX.Element
}

const NavLinks: React.FC<NavLinksProps> = ({
  customClassName,
  isOpen,
  shouldAnimate,
  leftLinks,
  rightLinks
}) => {
  const className = shouldAnimate
    ? styles[computeClass(!!isOpen, 'navLinksAnimateShow', 'navLinksAnimate')]
    : styles[computeClass(!!isOpen, 'navLinksShow', 'navLinks')]

  useNoScroll(isOpen)

  return (
    <div className={`${className} ${customClassName}`}>
      <span className={styles.navLinksGroupLeft}>{leftLinks}</span>
      <span className={styles.navLinksGroupRight}>{rightLinks}</span>
    </div>
  )
}

export default NavLinks
