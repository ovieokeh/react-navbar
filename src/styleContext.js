import { createContext } from 'react'

export const defaultTheme = {
  backgroundColor: '#ffffff',
  mainColor: 'green',
  shadowColor: '#4e4e4e',
  linkColor: '#4e4e4e',
  fontFamily: 'Work Sans',
  height: 55,
  padding: '0 2em',
  transition: {
    entry: {
      duration: 300,
      timingFunction: 'ease-out'
    },
    exit: {
      duration: 200,
      timingFunction: 'ease-in'
    }
  }
}

const ThemeContext = createContext(defaultTheme)

export default ThemeContext
