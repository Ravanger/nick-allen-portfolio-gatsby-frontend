import React from 'react'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Contact from '@components/Contact'

const ContactPage: React.FC = () => {
  return (
    <Layout linkLeft="work" linkRight="about">
      <SEO title="Contact" />
      <Contact />
    </Layout>
  )
}

export default ContactPage
