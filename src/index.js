import React from 'react'
import ReactDOM from 'react-dom'
import { customPartials, pageLoader, Styleguider } from 'styleguider'

import Button from './Button'

import logo from './assets/logo.png'

const Logo = () => <div>logo2</div>

const sections = [
  {
    title: 'Introduction',
    sections: [
      {
        title: 'Overview & Faq',
        loader: pageLoader(() => import('./sections/introduction/overview.md')),
      },
    ],
  },
  {
    title: 'Elements',
    sections: [
      {
        title: 'Avatar',
        loader: pageLoader(() => import('./sections/elements/avatar.md')),
      },
      {
        title: 'Button',
        loader: pageLoader(() => import('./sections/elements/button.md')),
      },
    ],
  },
]

const components = { Button }

const partials = customPartials({
  // logo: Logo,
})

ReactDOM.render(
  <Styleguider {...{ partials, components, sections, logo }} />,
  document.getElementById('app')
)
