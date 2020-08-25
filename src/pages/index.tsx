import React from 'react'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Landing from '@components/Landing'

const IndexPage: React.FC = () => {
  return (
    <Layout linkLeft="work" linkRight="about">
      <SEO title="Nick Allen" />
      <Landing />
    </Layout>
  )
}

export default IndexPage
