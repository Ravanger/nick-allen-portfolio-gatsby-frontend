import React from 'react'

import '@styles/colours.css'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import LandingPage from '@components/LandingPage'
import AboutPage from '@components/AboutPage'
import ContactPage from '@components/ContactPage'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Nick Allen" />
      <LandingPage />
      <AboutPage />
      <ContactPage />
    </Layout>
  )
}

export default IndexPage
