import * as React from 'react'

import { ThemeProps } from './interfaces'

const { useEffect } = React

export const themeMapping = {
  mainColor: '--main-color',
  backgroundColor: '--background-color',
  shadowColor: '--shadow-color',
  linkColor: '--link-color',
  fontFamily: '--font-family',
  height: '--height',
  sliderWidth: '--slider-width',
  padding: '--padding'
}

export const defaultTheme: ThemeProps = {
  mainColor: '#333333',
  backgroundColor: '#ffffff',
  shadowColor: '#4e4e4e',
  linkColor: '#4e4e4e',
  height: '55px',
  sliderWidth: '90%',
  padding: '0 2em'
}

export const useTheme = (theme: ThemeProps) =>
  useEffect(() => {
    const nav = document.querySelector('nav')

    if (nav) {
      Object.keys(theme).forEach(prop => {
        nav.style.setProperty(themeMapping[prop], theme[prop])
      })
    }
  }, [])
