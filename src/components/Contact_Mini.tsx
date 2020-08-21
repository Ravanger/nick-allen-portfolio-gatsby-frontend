import React from 'react'
import { Link } from 'gatsby'
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
      <Link to="/#contact">Contact</Link>
      <Socials_Icons fontsize="1.5em" />
    </DivContact>
  )
}

export default Contact_Mini
