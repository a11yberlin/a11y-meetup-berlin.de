import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Teaser from '../components/teaser';

import formatDate from '../utils/formatDate';

export const query = graphql`
  query EventsQuery {
    allEventsJson {
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
`;

const MeetupsPage = ({ data }) => {
  const events = data.allEventsJson ? data.allEventsJson.edges : null;

  return (
    <Layout>
      <SEO title="Meetups" keywords={[`accessibility`, `inclusivity`, `events`]} />
      <h1>Meetups</h1>
      {events &&
        events.map(event => {
          const currentDate = new Date();
          const meetupDate = new Date(event.node.date);

          return (
            currentDate > meetupDate && (
              <article
                id={`meetup_${event.node.editionNumber}`}
                key={event.node.editionNumber}
              >
                <h2
                  style={{
                    marginBottom: 0,
                  }}
                >
                  Meetup #{event.node.editionNumber}
                </h2>
                <p
                  style={{
                    marginTop: 0,
                    fontSize: '1.3rem',
                    color: 'var(--color-secondary)',
                    fontWeight: 'bold',
                  }}
                >
                  <time
                    dateTime={event.node.date}
                    dangerouslySetInnerHTML={{ __html: formatDate(event.node.date) }}
                  />
                </p>
                <h3>Talks</h3>
                {event.node.teasers.map(teaser => (
                  <div key={teaser.headline}>
                    <Teaser
                      headline={teaser.headline}
                      subline={teaser.subline}
                      text={teaser.text}
                      link={teaser.link}
                      slides={teaser.slides}
                      video={teaser.video}
                    />
                  </div>
                ))}
              </article>
            )
          );
        })}
    </Layout>
  );
};

export default MeetupsPage;
