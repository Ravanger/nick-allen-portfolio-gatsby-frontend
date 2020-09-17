import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

import Header from '@components/Header'

const MainContent = styled.main`
  display: flex;
  border: solid 2px var(--main-accent-color);
  margin: 0 2rem;
  margin-bottom: 2rem;
  padding-top: 7rem;
  min-height: calc(100vh - 2rem);
  text-align: center;

  > div {
    padding: 1rem;
  }
`

const SpanRotated = styled.span`
  display: block;
  font-size: 2rem;
  background-color: var(--main-bg-color);
  position: absolute;
  font-family: Colus, serif;
  padding: 0 0.5em;
  z-index: 9;
`

const SpanLeft = styled(SpanRotated)`
  transform: rotate(90deg) translate(-25%, 0);
  transform-origin: 1rem 0;
  left: 2rem;
  top: calc(50% + 2rem);
`

const SpanRight = styled(SpanRotated)`
  transform: rotate(-90deg) translate(25%, 0);
  transform-origin: right;
  right: 2rem;
  top: 50%;
`

const Layout: React.FC = props => {
  return (
    <>
      <Header />
      <SpanLeft>
        <Link to="/work">Work</Link>
      </SpanLeft>
      <SpanRight>
        <Link to="/about">About</Link>
      </SpanRight>
      <MainContent>{props.children}</MainContent>
    </>
  )
}

export default Layout
