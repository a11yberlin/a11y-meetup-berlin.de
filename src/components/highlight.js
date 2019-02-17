import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Highlight = ({ title = '', content = '', link }) => (
  <section
    style={{
      padding: 'var(--default-spacing) 0',
      margin: '0 auto',
      background: 'var(--color-light-background)',
    }}
  >
    <div className="l-container">
      <h2>{title}</h2>
      <p>
        {content} {link && <Link to={link.to}>{link.text}</Link>}
      </p>
    </div>
  </section>
)

Highlight.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.shape({
    to: PropTypes.string,
    text: PropTypes.string,
  }),
}

export default Highlight
