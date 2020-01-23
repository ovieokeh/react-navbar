import * as React from 'react'

import { computeClass } from '../utils'
import styles from './hamburger.css'

interface HamburgerProps {
  isToggled: boolean
  onToggle: any
}

const Hamburger: React.FC<HamburgerProps> = ({ isToggled, onToggle }) => {
  const burgerClass = styles[computeClass(!!isToggled, 'show', 'hidden')]
  const pattyClass = styles[computeClass(!!isToggled, 'barActive', 'bar')]

  return (
    <button className={burgerClass} type="button" onClick={onToggle}>
      <span className={pattyClass} />
      <span className={pattyClass} />
      <span className={pattyClass} />
    </button>
  )
}

export default Hamburger
