import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '@components/Layout'
import SEO from '@components/SEO'

const DivBorder = styled.div`
  height: calc(100% - 4rem);
  width: calc(100% - 4rem);
  position: absolute;
  border: solid 2px #f39836;
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
    background-color: #2f373e;
    color: white;
    padding: 1em;
  }
`

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <DivBorder />
    <DivIntro>
      <h1>Hi, I'm Nick</h1>
      <p>
        I'm a Visual Designer based in Toronto who loves illustration and
        chicken tendies.
      </p>
      <Link to="/">Get in touch</Link>
    </DivIntro>
  </Layout>
)

export default IndexPage
