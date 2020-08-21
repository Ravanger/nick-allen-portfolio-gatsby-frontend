import React from 'react'
import styled from '@emotion/styled'

import Layout from '@components/Layout'
import SEO from '@components/SEO'

const DivGallery = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 100vh;
`

const IllustrationsPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Illustrations" />
      <DivGallery>Illustrations. Under construction.</DivGallery>
    </Layout>
  )
}

export default IllustrationsPage
