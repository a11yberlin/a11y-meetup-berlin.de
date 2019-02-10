import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from './logo'

import '../styles/header.css'

const Header = ({ location }) => (
  <header
    role="banner"
    className="siteHeader"
  >
    <div className="l-container l-flexbox">
      <Logo />
      <div className="siteHeader__nav">
        <p>A usergroup about accessibility and inclusive design.</p>
        <nav aria-label="Main Navigation" className="mainNav">
          <ul>
            <li>
              <Link to="/" aria-current={location.pathname === '/' && "page"}>Home</Link>
            </li>
            <li>
              <Link to="/meetups" aria-current={location.pathname === '/meetups' && "page"}>Meetups</Link>
            </li>
            <li>
              <Link to="/about" aria-current={location.pathname === '/about' && "page"}>About</Link>
            </li>
            <li>
              <Link to="/submit" aria-current={location.pathname === '/submit' && "page"}>Submit a talk</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  location: PropTypes.any
}

export default Header
