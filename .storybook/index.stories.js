import React from 'react'

import Navbar from '../src/index'

export default { title: 'Navbar' }

const infoLinks = [
  { text: 'Our Plans', to: '/plans' },
  { text: 'How It Works', to: '/faq' },
  { text: 'Menu', to: '/menu' }
]

const nonAuthLinks = [
  { text: 'Get Started', to: '/sign-up' },
  { text: 'Sign In', to: '/sign-in' }
]

const authLinks = [
  { text: 'Landing', to: '/landing' },
  { text: 'Home', to: '/home' },
  { text: 'Account', to: '/account' }
]

export const demo = () => (
  <Navbar
    brand="naviar."
    infoLinks={infoLinks}
    authLinks={authLinks}
    nonAuthLinks={nonAuthLinks}
  />
)
