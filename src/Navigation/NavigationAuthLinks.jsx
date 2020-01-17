import React from 'react'
import PropTypes from 'prop-types'

import {
  NavItemsGroup,
  NavItemsGroupLinks,
  NavItemsGroupLinksLink
} from './shared'
import { NavLinkProp } from '../propTypes'

const NavigationAuthLinks = ({ isAuth, authLinks, nonAuthLinks, mainColor }) =>
  isAuth ? (
    <NavigationWithAuth mainColor={mainColor} links={authLinks} />
  ) : (
    <NavigationNonAuth mainColor={mainColor} links={nonAuthLinks} />
  )

NavigationAuthLinks.propTypes = {
  isAuth: PropTypes.bool,
  authLinks: PropTypes.arrayOf(NavLinkProp),
  nonAuthLinks: PropTypes.arrayOf(NavLinkProp),
  mainColor: PropTypes.string
}

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

NavigationWithAuth.propTypes = {
  links: PropTypes.arrayOf(NavLinkProp),
  mainColor: PropTypes.string
}

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

NavigationNonAuth.propTypes = {
  links: PropTypes.arrayOf(NavLinkProp),
  mainColor: PropTypes.string
}

export default NavigationAuthLinks
