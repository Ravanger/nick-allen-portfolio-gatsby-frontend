import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const SectionLanding = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

const DivBorder = styled.div`
  height: 100vh;
  width: calc(100% - 4rem);
  margin-bottom: 4rem;
  position: absolute;
  border: solid 2px var(--main-accent-color);
  border-top: none;
  z-index: -1;
`

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100vw;
  z-index: 5;
  margin-top: 7rem;

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
  text-align: center;
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

const LandingPage: React.FC = () => {
  const { strapiLandingPage } = useStaticQuery(graphql`
    query {
      strapiLandingPage {
        Header
        Description
      }
    }
  `)

  return (
    <SectionLanding id="landing">
      <DivBorder />
      <SpanLeft>
        <Link to="/work">Work</Link>
      </SpanLeft>
      <SpanRight>
        <Link to="/about">About</Link>
      </SpanRight>
      <DivContent>
        <h1>
          {strapiLandingPage.Header && strapiLandingPage.Header.length > 0
            ? strapiLandingPage.Header
            : "Hi, I'm Nick"}
        </h1>
        <p>
          {strapiLandingPage.Description &&
          strapiLandingPage.Description.length > 0
            ? strapiLandingPage.Description
            : "I'm a Visual Designer based in Toronto who loves illustration and chicken tendies."}
        </p>
        <Link to="/contact">Get in touch</Link>
      </DivContent>
    </SectionLanding>
  )
}

export default LandingPage
