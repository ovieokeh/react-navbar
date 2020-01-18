import React, { useContext } from 'react'

import { LinkContainer, Link } from './shared'

import ThemeContext from '../styleContext'
import { NavLinkProp } from '../propTypes'

const NavLink = ({ link }) => {
  const theme = useContext(ThemeContext)

  return (
    <LinkContainer>
      <Link color={theme.linkColor} href={link.to}>
        {link.text}
      </Link>
    </LinkContainer>
  )
}

NavLink.propTypes = {
  link: NavLinkProp.isRequired
}

export default NavLink
