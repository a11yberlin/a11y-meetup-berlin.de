import React from 'react'
import Logo from './logo'
import Nav from './nav.js'

import '../styles/header.css'

const Header = () => (
  <header role="banner" className="siteHeader">
    <div className="l-container l-flexbox">
      <Logo />
      <div className="siteHeader__nav">
        <p>A usergroup about accessibility and inclusive design.</p>
        <Nav />
      </div>
    </div>
  </header>
)

export default Header
