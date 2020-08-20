import React from 'react'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from '@emotion/styled'

const DivBorder = styled.div`
  height: calc(100% - 4rem);
  width: calc(100% - 4rem);
  position: absolute;
  border: solid 2px var(--main-accent-color);
  border-top: none;
  left: 2rem;
  top: 0;
  z-index: -1;
`

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: calc(100vh + 4rem);
  width: 100vw;
  z-index: 5;

  > h1 {
    font-family: Colus, serif;
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  > p {
    font-size: 2rem;
    margin-bottom: 2rem;
    max-width: 36rem;
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

const LandingPage: React.FC = () => {
  return (
    <section id="landing">
      <DivBorder />
      <SpanLeft>
        <Link to="/">Illustrations</Link>
      </SpanLeft>
      <SpanRight>
        <Link to="/">UX/UI</Link>
      </SpanRight>
      <DivContent>
        <h1>Hi, I'm Nick</h1>
        <p>
          I'm a Visual Designer based in Toronto who loves illustration and
          chicken tendies.
        </p>
        <AnchorLink to="/#contact">Get in touch</AnchorLink>
      </DivContent>
    </section>
  )
}

export default LandingPage
