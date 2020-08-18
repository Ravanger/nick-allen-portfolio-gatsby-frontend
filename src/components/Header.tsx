import React from 'react'
import styled from '@emotion/styled'

import MainNav from '@components/MainNav'
import Contact_Mini from '@components/Contact_Mini'

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  border-bottom: solid 2px #f39836;
  padding-bottom: 1rem;
`

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <MainNav />
      <Contact_Mini />
    </HeaderWrapper>
  )
}

export default Header
