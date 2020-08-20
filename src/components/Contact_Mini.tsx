import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled from '@emotion/styled'

import Socials_Icons from '@components/Socials_Icons'

const DivContact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: auto;

  > a {
    font-family: Colus, sans-serif;
    font-size: 2em;
    grid-area: 1 / 1 / 2 / 5;
    margin-bottom: 0.2em;
  }
`

const Contact_Mini: React.FC = () => {
  return (
    <DivContact>
      <AnchorLink to="/#contact">Contact</AnchorLink>
      <Socials_Icons fontsize="1.5em" />
    </DivContact>
  )
}

export default Contact_Mini
