import * as React from 'react'

const { useEffect } = React

export interface ThemeProps {
  backgroundColor?: string
  mainColor?: string
  menuBgColor?: string
  shadowColor?: string
  height?: string
  sliderWidth?: string
  padding?: string
}

export const themeMapping: ThemeProps = {
  mainColor: '--main-color',
  backgroundColor: '--background-color',
  menuBgColor: '--menu-bg-color',
  shadowColor: '--shadow-color',
  height: '--height',
  sliderWidth: '--slider-width',
  padding: '--padding'
}

export const defaultTheme: ThemeProps = {
  mainColor: '#333333',
  backgroundColor: '#ffffff',
  shadowColor: '#4e4e4e',
  height: '55px',
  sliderWidth: '90%',
  padding: '0 2em'
}

export const useTheme = (
  navRef: React.RefObject<HTMLElement>,
  theme: ThemeProps
) =>
  useEffect(() => {
    const nav = navRef.current

    if (nav) {
      Object.keys(theme).forEach(prop => {
        nav.style.setProperty(themeMapping[prop], theme[prop])
      })
    }
  }, [navRef, theme])
