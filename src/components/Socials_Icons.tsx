import React from 'react'
import styled from '@emotion/styled'
import { FaTwitter, FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa'
import { Link } from 'gatsby'

const UlSocialsIcons = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

type SocialsIconsTypes = {
  fontsize?: string | undefined
}

const Socials_Icons: React.FC<SocialsIconsTypes> = props => {
  return (
    <nav>
      <UlSocialsIcons>
        <li>
          <Link to="/">
            <FaTwitter fontSize={props.fontsize} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaInstagram fontSize={props.fontsize} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaDribbble fontSize={props.fontsize} />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaBehance fontSize={props.fontsize} />
          </Link>
        </li>
      </UlSocialsIcons>
    </nav>
  )
}

export default Socials_Icons
