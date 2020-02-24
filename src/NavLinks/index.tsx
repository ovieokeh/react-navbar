import * as React from 'react'

import { useNoScroll } from '../utils'
import './styles.scss'

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
  const otherClassNames: string[] = []

  if (shouldAnimate) {
    !!isOpen
      ? otherClassNames.push('animate show')
      : otherClassNames.push('animate')
  } else {
    !!isOpen && otherClassNames.push('nav-links--show')
  }

  useNoScroll(isOpen)

  return (
    <div className={`nav-links ${otherClassNames} ${customClassName}`.trim()}>
      <span className="nav-links__group left">{leftLinks}</span>
      <span className="nav-links__group right">{rightLinks}</span>
    </div>
  )
}

export default NavLinks
