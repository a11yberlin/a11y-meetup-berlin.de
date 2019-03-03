import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './footer';
import Highlight from './highlight';
import '../styles/base.css';
import '../styles/helper.css';
import '../styles/layout.css';

const highlightContent = {
  title: 'Code of Conduct',
  content: `If you are attending, organizing or speaking at our event, you are
    required to agree with our`,
  link: {
    to: '/code-of-conduct',
    text: 'Code of Conduct',
  },
};

const Layout = ({ noHighlight, children }) => (
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
    {!noHighlight && (
      <Highlight
        title={highlightContent.title}
        content={highlightContent.content}
        link={highlightContent.link}
      />
    )}
    <Footer />
  </>
);

Layout.propTypes = {
  noHighlight: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
