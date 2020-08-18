import React from 'react'
import styled from '@emotion/styled'

import Header from '@components/Header'

const MainContent = styled.main`
  padding: 2rem;
`

type PropTypes = {
  children: React.ReactNode
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
    </>
  )
}

export default Layout
