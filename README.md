# react-navbar

> A responsive react navbar component

[![NPM](https://img.shields.io/npm/v/react-navbar.svg)](https://www.npmjs.com/package/react-navbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ovieokeh/react-navbar
```

## Available Props
You can customise the look and content of the navbar by passing in the following props:

### Navbar Props
| name       | type       | default value | isRequired |
| ---------- | ---------- | ------------- | ---------- |
| brand      | string     |               | true       |
| leftLinks  | NavLinks   |               | false      |
| rightLinks | NavLinks   |               | false      |
| theme      | ThemeProps |               | false      |

### NavLinks
| prop  | type   |
| ----- | ------ |
| to    | string |
| text  | string |
| title | string |


### ThemeProps
| prop            | type   | default value |
| --------------- | ------ | ------------- |
| backgroundColor | string | "#ffffff"     |
| mainColor       | string | "#333333"     |
| shadowColor     | string | "#4e4e4e"     |
| linkColor       | string | "#4e4e4e"     |
| height          | string | "55px"        |
| sliderWidth     | string | "70%"         |
| padding         | string | "0 2em"       |

## Usage

```tsx
import * as React from 'react'

import Navbar from 'react-navbar'

const navTheme = {
  mainColor: 'red',
  backgroundColor: '#ffffff',
  shadowColor: '#4e4e4e',
  linkColor: 'red',
  fontFamily: 'Work Sans',
  height: '55px',
  padding: '0 2em'
}

const leftLinks = [
  { text: 'Our Plans', to: '/plans' },
  { text: 'How It Works', to: '/faq' },
  { text: 'Menu', to: '/menu' }
]

const rightLinks = [
  { text: 'Get Started', to: '/sign-up' },
  { text: 'Sign In', to: '/sign-in' }
]

const Example = () => {
  return (
    <Navbar
      brand="Base Corp."
      theme={navTheme}
      leftLinks={leftLinks}
      rightLinks={rightLinks}
    />
  )
}
```

## License

Apache-2.0 © [ovieokeh](https://github.com/ovieokeh)
