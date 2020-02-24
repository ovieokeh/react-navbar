import * as React from 'react'
import './styles.scss'

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
  const otherClassNames: string[] = []

  if (shouldAnimate) {
    !!isToggled
      ? otherClassNames.push('animate active')
      : otherClassNames.push('animate')
  } else {
    !!isToggled && otherClassNames.push('active')
  }

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
