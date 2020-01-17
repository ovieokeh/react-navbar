import React from 'react'

import {
  NavItemsGroup,
  NavItemsGroupLinks,
  NavItemsGroupLinksLink
} from './shared'
import { NavLinkProp } from '../propTypes'

NavigationWithAuth.propTypes = {
  links: PropTypes.arrayOf(NavLinkProp),
  mainColor: PropTypes.string
}

const NavigationInfoLinks = ({ links, mainColor }) => (
  <NavItemsGroup data-type="info">
    {links.map(link => (
      <NavItemsGroupLinks key={link.to}>
        <NavItemsGroupLinksLink color={mainColor} href={link.to}>
          {link.text}
        </NavItemsGroupLinksLink>
      </NavItemsGroupLinks>
    ))}
  </NavItemsGroup>
)

export default NavigationInfoLinks
