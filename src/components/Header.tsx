import React from 'react'
import styled from '@emotion/styled'

import '@styles/colours.css'

import MainNav from '@components/MainNav'
import Contact_Mini from '@components/Contact_Mini'

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  padding: 2rem;
  padding-bottom: 0;
  background-color: var(--main-bg-color);
  z-index: 10;

  > div {
    display: flex;
    align-items: center;
  }
  > hr {
    margin-bottom: 0;
    margin-top: 1rem;
    border: 1px solid var(--main-accent-color);
  }
`

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <div>
        <MainNav />
        <Contact_Mini />
      </div>
      <hr />
    </HeaderWrapper>
  )
}

export default Header
