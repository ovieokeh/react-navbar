import * as React from 'react'
import './styles.scss'
import { computeClass } from '../utils'

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
  const otherClassNames = computeClass(
    shouldAnimate,
    isToggled,
    'animate active',
    'animate',
    'active'
  )

  const pattyClassName = `patty ${otherClassNames}`.trim()

  return (
    <button className="burger" type="button" onClick={onToggle}>
      <span className={pattyClassName} />
      <span className={pattyClassName} />
      <span className={pattyClassName} />
    </button>
  )
}

export default Hamburger
