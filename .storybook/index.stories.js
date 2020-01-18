import React from 'react'

import Navbar from '../src/index'

export default { title: 'Navbar' }

const leftLinks = [
  { text: 'Our Plans', to: '/plans' },
  { text: 'How It Works', to: '/faq' },
  { text: 'Menu', to: '/menu' }
]

const rightLinks = [
  { text: 'Get Started', to: '/sign-up' },
  { text: 'Sign In', to: '/sign-in' }
]

export const demo = () => (
  <Navbar brand="naviar." leftLinks={leftLinks} rightLinks={rightLinks} />
)
