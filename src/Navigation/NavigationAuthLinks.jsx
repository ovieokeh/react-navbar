import React from 'react'

import {
  NavItemsGroup,
  NavItemsGroupLinks,
  NavItemsGroupLinksLink
} from './shared'
import * as Props from '../propTypes'

const NavigationWithAuth = ({ links, mainColor }) => (
  <NavItemsGroup data-type="auth">
    {links.map(link => (
      <NavItemsGroupLinks data-type="auth" key={link.to}>
        <NavItemsGroupLinksLink color={mainColor} href={link.to}>
          {link.text}
        </NavItemsGroupLinksLink>
      </NavItemsGroupLinks>
    ))}
  </NavItemsGroup>
)

NavigationWithAuth.propTypes = Props.NavigationChildProps

const NavigationNonAuth = ({ links, mainColor }) => (
  <NavItemsGroup data-type="auth">
    {links.map(link => (
      <NavItemsGroupLinks key={link.to}>
        <NavItemsGroupLinksLink color={mainColor} href={link.to}>
          {link.text}
        </NavItemsGroupLinksLink>
      </NavItemsGroupLinks>
    ))}
  </NavItemsGroup>
)

NavigationNonAuth.propTypes = Props.NavigationChildProps

const NavigationAuthLinks = ({ isAuth, authLinks, nonAuthLinks, mainColor }) =>
  isAuth ? (
    <NavigationWithAuth mainColor={mainColor} links={authLinks} />
  ) : (
    <NavigationNonAuth mainColor={mainColor} links={nonAuthLinks} />
  )

NavigationAuthLinks.propTypes = Props.NavigationAuthLinksProps

export default NavigationAuthLinks
