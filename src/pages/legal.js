import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const LegalPage = () => (
  <Layout>
    <SEO title="Legal" />
    <h1>Legal</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default LegalPage
