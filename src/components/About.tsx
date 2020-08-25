import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;

  > div {
    display: flex;
    align-items: flex-start;

    > div {
      width: 16rem;
      min-width: 12rem;
    }

    > section {
      display: flex;
      flex-direction: column;
      width: 24rem;
      margin-left: 1rem;

      > h2 {
        font-family: Colus, serif;
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      > p {
        white-space: pre-line;
        font-size: 1rem;
        margin-bottom: 2rem;
        font-size: 1.2rem;
      }
    }
  }

  > ul {
    display: flex;
    margin-top: 1rem;
    width: 42rem;
    justify-content: space-between;

    > li {
      width: 33%;
      border-left: solid 2px var(--main-accent-color);
      padding-left: 1rem;
      + li {
        margin-left: 2rem;
      }
      > h2 {
        margin-bottom: 1rem;
        font-family: Colus, serif;
        font-weight: bold;
      }
      > p {
        white-space: pre-line;
        font-size: 1.1rem;
      }
    }
  }
`

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiAboutPage {
        Description
        Header
        Education
        Experience
        Awards
        Portrait {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  `)

  const { strapiAboutPage } = data

  return (
    <>
      <DivAbout id="about">
        <div>
          <Img
            fluid={strapiAboutPage.Portrait.childImageSharp.fluid}
            alt="Nick Allen"
          />
          <section>
            <h2>
              {strapiAboutPage.Header && strapiAboutPage.Header.length > 0
                ? strapiAboutPage.Header
                : 'About me'}
            </h2>
            <p>
              {strapiAboutPage.Description &&
              strapiAboutPage.Description.length > 0
                ? strapiAboutPage.Description
                : "Hi, I'm Nick Allen. I'm a freelance visual designer living in Toronto. I specialize in UX/UI, graphic design, and illustration. \n\n I've worked on projects ranging from websites, mobile apps, to marketing campaigns and more. I'm always looking for new ways to apply my skills to help myself and my clients grow. \n\n Feel free to reach out if you'd like to work together or maybe just grab some coffee."}
            </p>
          </section>
        </div>
        <ul>
          <li>
            <h2>Education</h2>
            <p>
              {strapiAboutPage.Education && strapiAboutPage.Education.length > 0
                ? strapiAboutPage.Education
                : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'}
            </p>
          </li>
          <li>
            <h2>Awards</h2>
            <p>
              {strapiAboutPage.Awards && strapiAboutPage.Awards.length > 0
                ? strapiAboutPage.Awards
                : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'}
            </p>
          </li>
          <li>
            <h2>Experience</h2>
            <p>
              {strapiAboutPage.Experience &&
              strapiAboutPage.Experience.length > 0
                ? strapiAboutPage.Experience
                : 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'}
            </p>
          </li>
        </ul>
      </DivAbout>
    </>
  )
}

export default About
