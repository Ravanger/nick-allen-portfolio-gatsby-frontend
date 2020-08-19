import React from 'react'
import styled from '@emotion/styled'

import '@styles/colours.css'

import MainNav from '@components/MainNav'
import Contact_Mini from '@components/Contact_Mini'

const HeaderWrapper = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  padding: 2rem;
  align-items: center;
  padding-bottom: 1rem;
  background-color: var(--main-bg-color);
  z-index: 10;
  :after {
    content: '';
    background: var(--main-accent-color);
    position: absolute;
    bottom: 0;
    left: calc(2rem - 1px);
    height: calc(100vw - 4rem);
    width: 2px;
    transform: rotate(90deg);
    transform-origin: bottom;
  }
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
