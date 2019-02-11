import { Link } from 'gatsby'
import React from 'react'

import logoImg from '../images/logo.png'
import '../styles/logo.css'

const Logo = () => (
  <Link to="/" className="logo">
    <img
      src={logoImg}
      width="176"
      height="176"
      className="logo__img"
      alt="A11y Berlin"
    />
  </Link>
)

export default Logo
