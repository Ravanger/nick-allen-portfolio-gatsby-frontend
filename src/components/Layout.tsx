import React from 'react'
import { Global, css } from '@emotion/core'

import Header from '@components/Header'

const globalStyles = css`
  body {
    background-color: #fff2e4;
  }
`

type PropTypes = {
  children: React.ReactNode
}

const Layout: React.FC<PropTypes> = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
