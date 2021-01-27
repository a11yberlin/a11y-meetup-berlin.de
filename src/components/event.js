import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Teaser from './teaser';
import formatDate from '../utils/formatDate';

import '../styles/button.css';

const Event = () => (
  <StaticQuery
    query={graphql`
      query EventQuery {
        allEventsJson(limit: 1) {
          edges {
            node {
              date
              editionNumber
              doorsOpenTime
              talksStartTime
              colloqLink
              meetupLink
              teasers {
                headline
                subline
                text
                link
                slides
                video
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const event = data.allEventsJson ? data.allEventsJson.edges[0].node : null;
      const isPastEvent = new Date() > new Date(event.date);

      return event ? (
        <section
          style={{
            marginBottom: '5rem',
          }}
        >
          <h2>
            {!isPastEvent ? 'Next meetup' : 'Last meetup was'} on{' '}
            <time
              dateTime={event.date}
              dangerouslySetInnerHTML={{ __html: formatDate(event.date) }}
            />
          </h2>
          <div>
            {!isPastEvent && (
              <>
                <p>
                  Mark your calendars for <abbr title="Accessibility">A11y</abbr>{' '}
                  Meetup Berlin #{event.editionNumber} on{' '}
                  {formatDate(event.date, true)}. Please share with your friends and
                  spread the word.
                </p>
                {event.doorsOpenTime && event.talksStartTime && (
                  <p>
                    Doors open: {event.doorsOpenTime}
                    <br />
                    Talks start: {event.talksStartTime}
                  </p>
                )}
              </>
            )}
            <p>
              The main goal is to encourage everyone talking, thinking, and learning
              about digital access / inclusion and people with different
              disabilities.
            </p>
          </div>
          {event.colloqLink && !isPastEvent && (
            <div
              style={{
                margin: '2rem 0',
              }}
            >
              <a
                className="button button--green"
                href={event.colloqLink}
                title="Find more information about our upcoming event at colloq.io"
              >
                Register at Colloq.io
              </a>
            </div>
          )}
          {event.meetupLink && !isPastEvent && (
            <div
              style={{
                margin: '2rem 0',
              }}
            >
              <a
                className="button button--green"
                href={event.meetupLink}
                title="If you want to attend the meetup, please let us know at meetup.com"
              >
                Register at Meetup.com
              </a>
            </div>
          )}
          <h3>Speakers</h3>
          {event.teasers.length ? (
            event.teasers.map((teaser) => (
              <div key={teaser.headline}>
                <Teaser
                  headline={teaser.headline}
                  subline={teaser.subline}
                  text={teaser.text}
                  link={teaser.link}
                />
              </div>
            ))
          ) : (
            <p>To be announced.</p>
          )}
        </section>
      ) : (
        <section
          style={{
            marginBottom: '5rem',
          }}
        >
          <h2>No event data found.</h2>
        </section>
      );
    }}
  />
);

export default Event;
