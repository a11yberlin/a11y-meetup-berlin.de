import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Event from '../components/event';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`accessibility`, `inclusivity`, `usergroup`]} />
    <h1>A11y Meetup Berlin</h1>
    <Event />
  </Layout>
);

export default IndexPage;
