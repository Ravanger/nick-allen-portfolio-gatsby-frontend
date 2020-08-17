import React from 'react'
import styled from '@emotion/styled'
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'
import { Link } from 'gatsby'

const UlSocialsIcons = styled.ul`
  > li {
    display: inline-block;
  }
`

const Socials_Icons = () => {
  return (
    <UlSocialsIcons>
      <li>
        <Link to="/">
          <FaTwitter />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaDribbble />
        </Link>
      </li>
      <li>
        <Link to="/">
          <FaBehance />
        </Link>
      </li>
    </UlSocialsIcons>
  )
}

export default Socials_Icons
