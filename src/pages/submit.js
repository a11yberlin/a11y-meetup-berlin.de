import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const SubmitPage = () => (
  <Layout>
    <SEO title="Submit Talk" />
    <h1>Submit Talk</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SubmitPage;
