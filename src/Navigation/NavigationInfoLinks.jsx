import React from 'react'

import {
  NavItemsGroup,
  NavItemsGroupLinks,
  NavItemsGroupLinksLink
} from './shared'
import { NavigationChildProps } from '../propTypes'

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

NavigationInfoLinks.propTypes = NavigationChildProps

export default NavigationInfoLinks
