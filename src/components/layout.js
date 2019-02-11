import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import '../styles/base.css'
import '../styles/helper.css'
import '../styles/layout.css'

const Layout = ({ children }) => (
  <>
    <a
      href="#main"
      className="visibleOnFocus"
      style={{
        display: 'inline-block',
        margin: '1rem 1rem 2rem',
      }}
    >
      skip to content
    </a>
    <Header />
    <main id="main" className="l-container l-mainContent">
      {children}
    </main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
