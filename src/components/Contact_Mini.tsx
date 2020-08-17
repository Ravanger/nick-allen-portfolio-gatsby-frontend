import React from 'react'
import styled from '@emotion/styled'

import Socials_Icons from '@components/Socials_Icons'

const DivContact = styled.div`
  text-align: center;
  float: right;
`

const Contact_Mini = (): JSX.Element => {
  return (
    <DivContact>
      <span>Contact</span>
      <Socials_Icons />
    </DivContact>
  )
}

export default Contact_Mini
