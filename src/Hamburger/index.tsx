import * as React from 'react'

import { computeClass } from '../utils'
import styles from './hamburger.css'

interface HamburgerProps {
  isToggled: boolean
  shouldAnimate: boolean
  onToggle: any
}

const Hamburger: React.FC<HamburgerProps> = ({
  isToggled,
  shouldAnimate,
  onToggle
}) => {
  const burgerClass = styles['burger']
  const pattyClass = shouldAnimate
    ? styles[computeClass(!!isToggled, 'pattyActiveAnimate', 'pattyAnimate')]
    : styles[computeClass(!!isToggled, 'pattyActive', 'patty')]

  return (
    <button className={burgerClass} type="button" onClick={onToggle}>
      <span className={pattyClass} />
      <span className={pattyClass} />
      <span className={pattyClass} />
    </button>
  )
}

export default Hamburger
