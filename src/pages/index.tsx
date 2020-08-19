import React, { useState } from 'react'
import ReactPageScroller from 'react-page-scroller'

import '@styles/colours.css'

import Layout from '@components/Layout'
import LandingPage from '@components/LandingPage'
import AboutPage from '@components/AboutPage'
import SEO from '@components/SEO'

const IndexPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number | undefined>(undefined)

  const handlePageChange = (number: number | undefined) => {
    setCurrentPage(number)
  }

  return (
    <Layout handlePageChange={setCurrentPage}>
      <SEO title="Nick Allen" />
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={currentPage}
      >
        <LandingPage />
        <AboutPage />
      </ReactPageScroller>
    </Layout>
  )
}

export default IndexPage
