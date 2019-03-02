import { Link } from 'gatsby';
import React from 'react';

import '../styles/nav.css';

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { 'aria-current': 'page' } : null;
};

const Nav = () => (
  <nav aria-label="Main Navigation" className="nav">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/meetups" getProps={isPartiallyActive}>
          Meetups
        </Link>
      </li>
      <li>
        <Link to="/about" getProps={isPartiallyActive}>
          About
        </Link>
      </li>
      <li>
        <Link to="/submit" getProps={isPartiallyActive}>
          Submit a talk
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
