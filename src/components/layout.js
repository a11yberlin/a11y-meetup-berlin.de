import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import '../styles/base.css'
import '../styles/layout.css'

const Layout = ({ children, location }) => (
  <>
    <Header location />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        ❤️ by the A11y Berlin
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
