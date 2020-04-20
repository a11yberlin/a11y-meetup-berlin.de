import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/helper.css';

const Supporters = () => (
  <StaticQuery
    query={graphql`
      query SupportersQuery {
        allSupportersJson {
          edges {
            node {
              name
              nameInitials
              profileImg
            }
          }
        }
      }
    `}
    render={(data) => (
      <section
        style={{
          marginBottom: '5rem',
        }}
      >
        <h2>
          Our supporters{' '}
          <span role="img" aria-label="heart symbol">
            ❤️
          </span>
        </h2>
        <ul
          className="inlineFlexList listStyleReset"
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {data.allSupportersJson.edges.map((supporter, index) => (
            <li
              key={`supporter-${supporter.node.name}-${index}`}
              style={{
                padding: '10px',
              }}
            >
              <p style={{ fontSize: '0.85em', marginTop: 0 }}>
                {supporter.node.name}
              </p>
              {supporter.node.profileImg ? (
                <img
                  style={{
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid currentColor',
                    maxWidth: '100%',
                  }}
                  src={supporter.node.profileImg}
                  alt={supporter.node.name}
                  width="52"
                  height="52"
                />
              ) : (
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: '2px solid currentColor',
                    padding: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span>{supporter.node.nameInitials}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    )}
  />
);

export default Supporters;
