import React from 'react'
import styled from 'styled-components'

import { HamburgerProps } from './propTypes'

const Hamburger = ({ mainColor, barColor, onToggle }) => {
  const onClick = e => {
    const btn = e.target

    btn && btn.classList.toggle('open')
    onToggle()
  }

  return (
    <NavHamburger type="button" onClick={onClick}>
      <Lines data-backgroundcolor={mainColor} data-barcolor={barColor} />
      <Lines data-backgroundcolor={mainColor} data-barcolor={barColor} />
      <Lines data-backgroundcolor={mainColor} data-barcolor={barColor} />
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
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 0;
      left: 8px;
    }

    &:nth-child(2) {
      width: 0%;
      opacity: 0;
    }

    &:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
      top: 20px;
      left: 8px;
    }
  }
`

const Lines = styled.span`
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background-color: ${props => props['data-barcolor']};
  border-radius: 12px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 300ms ease-in-out;
  -moz-transition: 300ms ease-in-out;
  -o-transition: 300ms ease-in-out;
  transition: 300ms ease-in-out;

  &:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  &:nth-child(2) {
    top: 9px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  &:nth-child(3) {
    top: 18px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }
`

export default Hamburger
