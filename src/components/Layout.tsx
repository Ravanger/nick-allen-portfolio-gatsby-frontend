import React from 'react'

import Header from '@components/Header'

type PropTypes = {
  children: React.ReactNode
  handlePageChange?: React.Dispatch<number | undefined>
}

const Layout: React.FC<PropTypes> = props => {
  return (
    <>
      <Header handlePageChange={props.handlePageChange} />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
