import React from 'react'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import About from '@components/About'

const AboutPage: React.FC = () => {
  return (
    <Layout linkLeft="work" linkRight="about">
      <SEO title="About" />
      <About />
    </Layout>
  )
}

export default AboutPage
