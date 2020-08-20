import React from 'react'

import '@styles/colours.css'

import Layout from '@components/Layout'
import LandingPage from '@components/LandingPage'
import AboutPage from '@components/AboutPage'
import SEO from '@components/SEO'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Nick Allen" />
      <LandingPage />
      <AboutPage />
    </Layout>
  )
}

export default IndexPage
