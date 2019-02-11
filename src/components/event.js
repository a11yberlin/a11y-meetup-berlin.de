import React from 'react'
import Teaser from './teaser'

import '../styles/button.css'

const Event = () => (
  <section
    style={{
      marginBottom: '5rem',
    }}
  >
    <h2>
      Next meetup on{' '}
      <time dateTime="2018-12-11">
        Dec 11<sup>th</sup> 2018
      </time>
    </h2>
    <div>
      <p>
        Mark your calendars for <abbr title="Accessibility">A11y</abbr> Meetup
        Berlin #5 on Dec 11, 2018. Please share with your friends and spread the
        word.
      </p>
      <p>
        Doors open: 7:00pm
        <br />
        Talks start: 7:30pm
      </p>
      <p>
        The main goal is to encourage everyone talking, thinking, and learning
        about digital access / inclusion and people with different disabilities.
      </p>
    </div>

    <div
      style={{
        margin: '2rem 0',
      }}
    >
      <a
        className="button button--green"
        href="https://colloq.io/events/a11y-meetup-berlin/2018/berlin/5"
        title="Find more information about our upcoming event at colloq.io"
      >
        Register at Colloq.io
      </a>
    </div>
    <div
      style={{
        margin: '2rem 0',
      }}
    >
      <a
        className="button button--green"
        href="https://www.meetup.com/A11y-Meetup-Berlin/events/255450708/"
        title="If you want to attend the meetup, please let us know at meetup.com"
      >
        Register at Meetup.com
      </a>
    </div>
    <h3>Speakers</h3>
    <div>
      <Teaser
        headline="WCAG 2.1 : quick overview and slow digestion"
        subline="Aurélien Levy (Accessibility expert and CEO of Temesis)"
        text="During this talk, Aurélien will quickly present the new success criteria of WCAG 2.1 avoiding jargon terminology. Using concrete examples he will tell us what it changes in term of design or development. On the menu, mobile, low vision, voice recognition and cognitive disability contexts."
        link="https://twitter.com/goetsu"
      />
    </div>
  </section>
)

export default Event
