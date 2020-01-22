export interface ThemeProps {
  backgroundColor?: string
  mainColor?: string
  menuBgColor?: string
  shadowColor?: string
  height?: string
  sliderWidth?: string
  padding?: string
}

export interface HamburgerProps {
  isToggled: boolean
  onToggle: any
}

export interface NavLinksProps {
  isOpen: boolean
  leftLinks?: JSX.Element
  rightLinks?: JSX.Element
}

export interface NavbarProps {
  brand: JSX.Element
  leftLinks?: JSX.Element
  rightLinks?: JSX.Element
  theme?: ThemeProps
}
