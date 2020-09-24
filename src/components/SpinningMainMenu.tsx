import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const DivSpinningMenu = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`

const SpanRotated = styled.span`
  display: block;
  font-size: 2rem;
  background-color: var(--main-bg-color);
  position: absolute;
  font-family: Colus, serif;
  padding: 0 0.5em;
  z-index: 20;
  top: 50%;
  text-align: center;
`

const SpanLeft = styled(SpanRotated)`
  transform: rotate(-90deg) translate(calc(-50% - 2rem));
  transform-origin: left;
  left: 2rem;
`

const SpanRight = styled(SpanRotated)`
  transform: rotate(90deg) translate(calc(50% + 2rem));
  transform-origin: right;
  right: 2rem;
`

const SpanBottom = styled(SpanRotated)`
  bottom: 1rem;
  top: auto;
  left: 50%;
  transform: translate(-50%);
`

const SpanTop = styled(SpanRotated)`
  top: 6rem;
  left: 50%;
  transform: translate(-50%);
`

const landingMenu = (
  <DivSpinningMenu>
    <SpanLeft>
      <Link to="/work">Work</Link>
    </SpanLeft>
    <SpanRight>
      <Link to="/about">About</Link>
    </SpanRight>
    <SpanBottom>
      <Link to="/contact">Contact</Link>
    </SpanBottom>
  </DivSpinningMenu>
)

const aboutMenu = (
  <DivSpinningMenu>
    <SpanTop>
      <Link to="/about">About</Link>
    </SpanTop>
    <SpanLeft>
      <Link to="/work">Work</Link>
    </SpanLeft>
    <SpanBottom>
      <Link to="/contact">Contact</Link>
    </SpanBottom>
  </DivSpinningMenu>
)

const workMenu = (
  <DivSpinningMenu>
    <SpanTop>
      <Link to="/work">Work</Link>
    </SpanTop>
    <SpanRight>
      <Link to="/about">About</Link>
    </SpanRight>
    <SpanBottom>
      <Link to="/contact">Contact</Link>
    </SpanBottom>
  </DivSpinningMenu>
)

const contactMenu = (
  <DivSpinningMenu>
    <SpanTop>
      <Link to="/contact">Contact</Link>
    </SpanTop>
    <SpanLeft>
      <Link to="/work">Work</Link>
    </SpanLeft>
    <SpanRight>
      <Link to="/about">About</Link>
    </SpanRight>
  </DivSpinningMenu>
)

const SpinningMainMenu = () => {
  const currentPage = typeof location !== 'undefined' ? location.pathname : ''

  switch (currentPage) {
    case '/':
    default:
      return landingMenu
    case '/about':
    case '/about/':
      return aboutMenu
    case '/work':
    case '/work/':
      return workMenu
    case '/contact':
    case '/contact/':
      return contactMenu
  }
}

export default SpinningMainMenu
