import React from 'react'

import '@styles/colours.css'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import LandingPage from '@components/LandingPage'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Nick Allen" />
      <LandingPage />
    </Layout>
  )
}

export default IndexPage
