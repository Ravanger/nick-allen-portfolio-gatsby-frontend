import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

import '@styles/colours.css'

import Layout from '@components/Layout'
import LandingPage from '@components/LandingPage'
import AboutPage from '@components/AboutPage'
import SEO from '@components/SEO'

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Nick Allen" />
      <ReactFullpage
        scrollingSpeed={1000}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <LandingPage />
              </div>
              <div className="section">
                <AboutPage />
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />

      {/* <LandingPage />
      <AboutPage /> */}
    </Layout>
  )
}

export default IndexPage
