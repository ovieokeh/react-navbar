import * as React from 'react'

import { computeClass } from '../utils'
import styles from './styles.css'

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
  const pattyClass = shouldAnimate
    ? styles[computeClass(!!isToggled, 'pattyAnimateActive', 'pattyAnimate')]
    : styles[computeClass(!!isToggled, 'pattyActive', 'patty')]

  return (
    <button className={styles.burger} type="button" onClick={onToggle}>
      <span className={pattyClass} />
      <span className={pattyClass} />
      <span className={pattyClass} />
    </button>
  )
}

export default Hamburger
