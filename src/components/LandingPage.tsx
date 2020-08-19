import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import SEO from '@components/SEO'

const DivBorder = styled.div`
  height: calc(100% - 4rem);
  width: calc(100% - 4rem);
  position: absolute;
  border: solid 2px var(--main-accent-color);
  border-top: none;
`

const DivIntro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  text-align: center;
  align-items: center;
  max-width: 36rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > h1 {
    font-family: Colus, serif;
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  > p {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  > a {
    font-family: Colus, serif;
    text-transform: uppercase;
    background-color: var(--main-text-color);
    color: var(--main-bg-color);
    padding: 1em;
  }
`

const SpanRotated = styled.span`
  display: block;
  font-size: 2rem;
  background-color: var(--main-bg-color);
  position: absolute;
  top: 50%;
  text-align: center;
  font-family: Colus, serif;
  padding: 0 0.5em;
  z-index: 9;
`

const SpanLeft = styled(SpanRotated)`
  transform: rotate(90deg) translate(-25%, 0);
  transform-origin: 1rem 0;
  left: 2rem;
`

const SpanRight = styled(SpanRotated)`
  transform: rotate(-90deg) translate(25%, 0);
  transform-origin: right;
  right: 2rem;
`

const LandingPage = () => {
  return (
    <>
      <SEO title="Home" />
      <DivBorder />
      <SpanLeft>Illustrations</SpanLeft>
      <SpanRight>UX/UI</SpanRight>
      <DivIntro>
        <h1>Hi, I'm Nick</h1>
        <p>
          I'm a Visual Designer based in Toronto who loves illustration and
          chicken tendies.
        </p>
        <Link to="/">Get in touch</Link>
      </DivIntro>
    </>
  )
}

export default LandingPage
