import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const DivLanding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  * + * {
    margin-top: 2rem;
  }

  > h1 {
    font-family: Colus, serif;
    font-size: 4rem;
  }

  > p {
    font-size: 2rem;
    width: 36rem;
    white-space: pre-line;
  }

  > a {
    font-family: Colus, serif;
    background-color: var(--main-text-color);
    color: var(--main-bg-color);
    padding: 1em;
  }
`

const Landing: React.FC = () => {
  const { strapiLandingPage } = useStaticQuery(graphql`
    query {
      strapiLandingPage {
        Header
        Description
      }
    }
  `)

  return (
    <DivLanding>
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
    </DivLanding>
  )
}

export default Landing
