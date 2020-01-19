import * as React from 'react'

import { HamburgerProps } from '../interfaces'

import styles from './hamburger.css'

const Hamburger: React.FC<HamburgerProps> = ({ isToggled, onToggle }) => {
  const burgerClassname = isToggled ? 'show' : 'hidden'
  const pattyClassname = isToggled ? 'barActive' : 'bar'

  return (
    <button
      className={styles[burgerClassname]}
      type="button"
      onClick={onToggle}
    >
      <span className={styles[pattyClassname]} />
      <span className={styles[pattyClassname]} />
      <span className={styles[pattyClassname]} />
    </button>
  )
}

export default Hamburger
