import React from 'react'
import styled from '@emotion/styled'

import Layout from '@components/Layout'
import SEO from '@components/SEO'

const DivProjects = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const UxuiPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Illustrations" />
      <DivProjects>UX/UI. Under construction.</DivProjects>
    </Layout>
  )
}

export default UxuiPage
