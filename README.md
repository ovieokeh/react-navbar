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
| name       | type        | default value | isRequired |
| ---------- | ----------- | ------------- | ---------- |
| brand      | JSX.Element |               | true       |
| leftLinks  | JSX.Element |               | false      |
| rightLinks | JSX.Element |               | false      |
| theme      | ThemeProps  |               | false      |


### ThemeProps
| prop            | type   | default value |
| --------------- | ------ | ------------- |
| mainColor       | string | "#333333"     |
| backgroundColor | string | "#ffffff"     |
| shadowColor     | string | "#4e4e4e"     |
| linkColor       | string | "#4e4e4e"     |
| height          | string | "55px"        |
| sliderWidth     | string | "100%"        |
| padding         | string | "0 2em"       |

## Usage

```tsx
import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from 'react-navbar'

const navTheme = {
  mainColor: 'red',
  backgroundColor: '#ffffff',
  shadowColor: '#4e4e4e',
  linkColor: 'red',
  height: '55px'
}

const navBrand = <Link to={ROUTES.HOME}>Base Corp.</Link>

const leftLinks = (
  <span>
    <Link to={ROUTES.PLANS}>Our Plans</Link>
    <Link to={ROUTES.FAQ}>How It Works</Link>
    <Link to={ROUTES.MENU}>Our Menus</Link>
  </span>
)

const rightLinks = (
  <span>
    <a href={ROUTES.SIGNUP}>Get Started</a>
    <a href={ROUTES.SIGNIN}>Sign In</a>
  </span>
)

const Example = () => {
  return (
    <Navbar
      brand={navBrand}
      theme={navTheme}
      leftLinks={leftLinks}
      rightLinks={rightLinks}
    />
  )
}
```

## License

Apache-2.0 © [Ovie Okeh](https://github.com/ovieokeh)
