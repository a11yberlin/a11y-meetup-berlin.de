import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const CodeOfConduct = () => (
  <Layout noHighlight>
    <SEO title="Code of Conduct" />
    <h1>Code Of Conduct</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default CodeOfConduct;
