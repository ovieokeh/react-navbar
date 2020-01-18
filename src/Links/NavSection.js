import React from 'react'
import PropTypes from 'prop-types'

import NavLink from './NavLink'

import { NavLinks } from './shared'
import { NavLinkProp } from '../propTypes'

const NavSection = ({ position, links }) => (
  <NavLinks data-position={position}>
    {links.map(link => (
      <NavLink key={link.to} link={link} />
    ))}
  </NavLinks>
)

NavSection.propTypes = {
  position: PropTypes.oneOf(['left', 'right']).isRequired,
  links: PropTypes.arrayOf(NavLinkProp).isRequired
}

export default NavSection
