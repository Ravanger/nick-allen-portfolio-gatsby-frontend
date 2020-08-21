import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import Masonry from 'react-masonry-css'

import Layout from '@components/Layout'
import SEO from '@components/SEO'

const DivGallery = styled.div`
  max-width: 52rem;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 7rem;
  text-align: center;

  > div {
    display: flex;
    margin-top: 2rem;

    > div {
      padding-left: 0.2em;
      padding-right: 0.2em;
      > div {
        margin-bottom: 0.4em;
      }
    }
  }
`

const IllustrationsPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: { glob: "art/*" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `)

  const mockArray1: Node[] = data.allFile.nodes
  const mockArray2: Node[] = data.allFile.nodes
  const mockArray3: Node[] = data.allFile.nodes
  const artImages: Node[] = mockArray1.concat(mockArray2.concat(mockArray3))
  artImages.sort(() => 0.5 - Math.random())

  return (
    <Layout>
      <SEO title="Illustrations" />
      <DivGallery>
        <Masonry
          breakpointCols={{
            default: 3,
            820: 2,
            500: 1,
          }}
          className=""
          columnClassName=""
        >
          {artImages.map((item: any, index: number) => (
            <Img fluid={item.childImageSharp.fluid} key={index} />
          ))}
        </Masonry>
      </DivGallery>
    </Layout>
  )
}

export default IllustrationsPage
