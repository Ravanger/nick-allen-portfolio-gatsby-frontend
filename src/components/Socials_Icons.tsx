import React from 'react'
import styled from '@emotion/styled'
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'

const UlSocialsIcons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

type SocialsIconsTypes = {
  fontsize?: string | undefined
}

const Socials_Icons: React.FC<SocialsIconsTypes> = props => {
  const { strapiSocial } = useStaticQuery(graphql`
    query {
      strapiSocial {
        Behance
        Dribbble
        Instagram
        Twitter
      }
    }
  `)

  return (
    <nav>
      <UlSocialsIcons>
        {strapiSocial.Twitter && strapiSocial.Twitter.length > 0 && (
          <li>
            <a href={strapiSocial.Twitter} target="_blank">
              <FaTwitter fontSize={props.fontsize} />
            </a>
          </li>
        )}
        {strapiSocial.Instagram && strapiSocial.Instagram.length > 0 && (
          <li>
            <a href={strapiSocial.Instagram} target="_blank">
              <FaInstagram fontSize={props.fontsize} />
            </a>
          </li>
        )}
        {strapiSocial.Dribbble && strapiSocial.Dribbble.length > 0 && (
          <li>
            <a href={strapiSocial.Dribbble} target="_blank">
              <FaDribbble fontSize={props.fontsize} />
            </a>
          </li>
        )}
        {strapiSocial.Behance && strapiSocial.Behance.length > 0 && (
          <li>
            <a href={strapiSocial.Behance} target="_blank">
              <FaBehance fontSize={props.fontsize} />
            </a>
          </li>
        )}
      </UlSocialsIcons>
    </nav>
  )
}

export default Socials_Icons
