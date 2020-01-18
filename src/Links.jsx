import React, { useContext } from 'react'
import styled from 'styled-components'

import NavigationInfoLinks from './Navigation/NavigationInfoLinks'
import NavigationAuthLinks from './Navigation/NavigationAuthLinks'

import ThemeContext from './styleContext'
import { NavigationLinksProps } from './propTypes'

const NavigationLinks = ({ isOpen, infoLinks, authLinks, nonAuthLinks }) => {
  const theme = useContext(ThemeContext)

  return (
    <NavLinks data-isopen={isOpen}>
      <NavigationInfoLinks links={infoLinks} mainColor={theme.mainColor} />

      <NavigationAuthLinks
        isAuth={true}
        authLinks={authLinks}
        nonAuthLinks={nonAuthLinks}
      />
    </NavLinks>
  )
}

NavigationLinks.propTypes = NavigationLinksProps

const NavLinks = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 55px;
    right: ${props => (props['data-isopen'] ? 0 : '-999px')};
    bottom: 0;
    width: 50%;
    background-color: white;
    transition: right 300ms
      ${props => (props['data-isopen'] ? 'ease-in' : 'ease-out')};
    padding: 2em;
    z-index: 1;

    &::before {
      content: '';
      display: block;
      height: 55px;
      background-color: transparent;
      position: fixed;
      width: 50%;
      padding: 0 2em;
      right: ${props => (props['data-isopen'] ? 0 : '-999px')};
      top: 0;
      box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.1);
      transition: right 300ms ease-out;
    }
  }
`

export default NavigationLinks
