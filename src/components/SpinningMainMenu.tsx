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
  z-index: 9;
`

const SpanLeft = styled(SpanRotated)`
  transform: rotate(90deg);
  transform-origin: left;
  left: 2rem;
  top: calc(50% - 2rem);
`

const SpanRight = styled(SpanRotated)`
  transform: rotate(-90deg);
  transform-origin: right;
  right: 2rem;
  top: calc(50% - 2rem);
`

const SpanBottom = styled(SpanRotated)`
  bottom: 1rem;
  left: calc(50% - 6rem);
`

const SpinningMainMenu = () => {
  return (
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
}

export default SpinningMainMenu
