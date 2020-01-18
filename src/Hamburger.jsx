import React, { useContext } from 'react'
import styled from 'styled-components'

import ThemeContext from './styleContext'
import { HamburgerProps } from './propTypes'

const Hamburger = ({ onToggle }) => {
  const theme = useContext(ThemeContext)

  const onClick = e => {
    const btn = e.target

    btn && btn.classList.toggle('open')
    onToggle()
  }

  return (
    <NavHamburger
      type="button"
      onClick={onClick}
      data-backgroundcolor={theme.mainColor}
    >
      <Bars data-barcolor={theme.mainColor} />
      <Bars data-barcolor={theme.mainColor} />
      <Bars data-barcolor={theme.mainColor} />
    </NavHamburger>
  )
}

Hamburger.propTypes = HamburgerProps

const NavHamburger = styled.button`
  display: none;
  background-color: transparent;
  width: 28px;
  height: 23px;
  transform: rotate(0deg);
  transition: 300ms ease-in-out;
  border: none;
  cursor: pointer;
  z-index: 300;

  & * {
    pointer-events: none;
  }

  @media (max-width: 768px) {
    display: inline-block;
  }

  &.open span {
    background-color: ${props => props['data-backgroundcolor']};
    opacity: 0.6;

    &:nth-child(1) {
      transform: rotate(45deg);
      top: 0;
      left: 8px;
    }

    &:nth-child(2) {
      width: 0%;
      opacity: 0;
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
      top: 20px;
      left: 8px;
    }
  }
`

const Bars = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: ${props => props['data-barcolor']};
  border-radius: 12px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 300ms ease-in-out;

  &:nth-child(1) {
    top: 0px;
    transform-origin: left center;
  }

  &:nth-child(2) {
    top: 9px;
    transform-origin: left center;
  }

  &:nth-child(3) {
    top: 18px;
    transform-origin: left center;
  }
`

export default Hamburger
