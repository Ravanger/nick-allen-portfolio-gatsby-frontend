import React from 'react'
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'

import Header from '@components/Header'

const globalStyles = css`
  body {
    background-color: #fff2e4;
    font-family: Roboto, sans-serif;
    color: #2f373e;
    overflow: hidden;
  }

  a {
    color: #2f373e;
    text-decoration: none;
  }
`

const MainContent = styled.main`
  padding: 2rem;
`

type PropTypes = {
  children: React.ReactNode
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <MainContent>{children}</MainContent>
    </>
  )
}

export default Layout
