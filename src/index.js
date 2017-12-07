import React from 'react'
import ReactDOM from 'react-dom'
import { useCustomPartials, pageLoader, Styleguider } from 'styleguider'

import logo from './assets/logo.png'
import Logo from './partials/Logo'
import Button from './react/Button'

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

const partials = useCustomPartials({
  logo: Logo,
})

ReactDOM.render(
  <Styleguider {...{ partials, components, sections, logo }} />,
  document.getElementById('app')
)
