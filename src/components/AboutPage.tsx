import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SectionAbout = styled.section`
  display: flex;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  flex-direction: column;
  align-items: center;

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

      > h1 {
        font-family: Colus, serif;
        font-size: 2rem;
        margin-bottom: 2rem;
      }
      > p {
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
        font-size: 1.1rem;
      }
    }
  }
`

const AboutPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { glob: "*headshot" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  const nickImage = data.file.childImageSharp.fluid

  return (
    <SectionAbout id="about">
      <div>
        <Img fluid={nickImage} alt="Nick Allen" />
        <section>
          <h1>About me</h1>
          <p>
            Hi, I'm Nick Allen. I'm a freelance visual designer living in
            Toronto. I specialize in UX/UI, graphic design, and illustration.
          </p>
          <p>
            I've worked on projects ranging from websites, mobile apps, to
            marketing campaigns and more. I'm always looking for new ways to
            apply my skills to help myself and my clients grow.
          </p>
          <p>
            Feel free to reach out if you'd like to work together or maybe just
            grab some coffee.
          </p>
        </section>
      </div>
      <ul>
        <li>
          <h2>Education</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
        </li>
        <li>
          <h2>Awards</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
        </li>
        <li>
          <h2>Experience</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et
          </p>
        </li>
      </ul>
    </SectionAbout>
  )
}

export default AboutPage
