import React from 'react'
import PropTypes from 'prop-types'

import '../styles/button.css'

const Teaser = ({ headline, subline, text, link, slides, video }) => (
  <article
    style={{
      paddingLeft: '2em',
      marginBottom: '3rem',
      borderLeft: '1rem solid var(--color-primary)',
      width: '100%',
    }}
  >
    <h4
      style={{
        color: 'var(--color-secondary)',
        margin: '0',
      }}
    >
      {headline}
    </h4>
    <p
      style={{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        margin: '1em 0',
      }}
    >
      {link ? <a href={link}>{subline}</a> : { subline }}
    </p>
    <p>{text}</p>
    {slides && (
      <a className="button" href={slides} rel="noopener">
        Slides
      </a>
    )}
    {video && (
      <a className="button" href={video} rel="noopener">
        Video
      </a>
    )}
  </article>
)

Teaser.propTypes = {
  headline: PropTypes.string,
  subline: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  slides: PropTypes.string,
  video: PropTypes.string,
}

export default Teaser