import React from 'react'
import styled from '@emotion/styled'
import Masonry from 'react-masonry-css'

import Layout from '@components/Layout'
import SEO from '@components/SEO'

const DivGallery = styled.div`
  max-width: 52rem;
  margin: 0 auto;
  padding-top: 7rem;
  text-align: center;

  > div {
    display: flex;
    width: auto;

    > div {
      padding-left: 0.5em;
      padding-right: 0.5em;
      > p {
        background: grey;
        margin-bottom: 30px;
        padding: 1em;
      }
    }
  }
`

const IllustrationsPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Illustrations" />
      <DivGallery>
        <Masonry
          breakpointCols={{
            default: 3,
            900: 2,
            600: 1,
          }}
          className=""
          columnClassName=""
        >
          <p>Illustrations. Under construction.</p>
          <p>Illustrations. Under construction.</p>
          <p>Illustrations. Under construction.</p>
          <p>Illustrations. Under construction.</p>
          <p>Illustrations. Under construction.</p>
        </Masonry>
      </DivGallery>
    </Layout>
  )
}

export default IllustrationsPage
