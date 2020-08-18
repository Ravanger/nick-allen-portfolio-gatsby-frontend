import React from 'react'
import styled from '@emotion/styled'

import Socials_Icons from '@components/Socials_Icons'

const DivContact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: auto;

  > span {
    font-family: Colus, sans-serif;
    font-size: 2em;
    grid-area: 1 / 1 / 2 / 5;
  }
`

const Contact_Mini: React.FC = () => {
  return (
    <DivContact>
      <span>Contact</span>
      <Socials_Icons fontsize="2em" />
    </DivContact>
  )
}

export default Contact_Mini
