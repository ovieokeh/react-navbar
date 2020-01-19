export interface ThemeProps {
  backgroundColor: string
  mainColor: string
  shadowColor: string
  linkColor: string
  height: string
  sliderWidth: string
  padding: string
}

export interface NavLinkProp {
  to: string
  text: string
  title: string
}

export interface NavigationBrandProps {
  route: string
  brand: string
}

export interface HamburgerProps {
  isToggled: boolean
  onToggle: any
}

export interface NavLinksProps {
  isOpen: boolean
  leftLinks: NavLinkProp[]
  rightLinks: NavLinkProp[]
}

export interface NavbarProps {
  brand: string
  leftLinks: NavLinkProp[]
  rightLinks: NavLinkProp[]
  theme: ThemeProps
}
