import React from 'react'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import ContactPage from '@components/ContactPage'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactPage />
    </Layout>
  )
}

export default IndexPage
