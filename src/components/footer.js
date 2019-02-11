import React from 'react'
import { Link } from 'gatsby'

import emailIcon from '../icons/email.svg'
import twitterIcon from '../icons/twitter.svg'
import meetupIcon from '../icons/meetup.svg'
import colloqIcon from '../icons/colloq.svg'
import githubIcon from '../icons/github.svg'

import '../styles/footer.css'
import '../styles/icon-list.css'

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { 'aria-current': 'page' } : null
}

const contacts = [
  {
    link: 'mailto:info@a11y-meetup-berlin.de',
    text: 'info@a11y-meetup-berlin.de',
    icon: emailIcon,
  },
  {
    link: 'https://twitter.com/a11yberlin',
    text: 'Follow us on Twitter',
    icon: twitterIcon,
  },
  {
    link: 'https://www.meetup.com/de-DE/A11y-Meetup-Berlin',
    text: 'Find us on Meetup.com',
    icon: meetupIcon,
  },
  {
    link: 'https://colloq.io/events/a11y-meetup-berlin',
    text: 'Find us on Colloq.io',
    icon: colloqIcon,
  },
  {
    link: 'https://github.com/a11yberlin/a11y-meetup-berlin.de',
    text: 'Watch the code on GitHub',
    icon: githubIcon,
  },
]

const Footer = () => (
  <footer role="contentinfo" className="siteFooter">
    <div className="l-container">
      <h2>Contact</h2>
      <ul className="iconList">
        {contacts.map((contact, index) => (
          <li key={index}>
            <a href={contact.link} rel="noopener">
              <svg>
                <use xlinkHref={`#${contact.icon.id}`} />
              </svg>
              <span className="linkText">{contact.text}</span>
            </a>
          </li>
        ))}
        <li>
          <Link to="/legal" getProps={isPartiallyActive}>
            <span className="linkText">Legal</span>
          </Link>
        </li>
      </ul>
    </div>
    <div style={{ textAlign: 'center', paddingBottom: '1em' }}>
      © {new Date().getFullYear()} Built with
      {` `}
      ❤️ by the A11y Berlin Team
    </div>
  </footer>
)

export default Footer
