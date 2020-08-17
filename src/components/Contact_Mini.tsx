import React from 'react'
import styled from '@emotion/styled'

import Socials_Icons from '@components/Socials_Icons'

const DivContact = styled.div`
  text-align: center;
  float: right;
`

const SpanContact = styled.span`
  font-family: Colus, sans-serif;
  font-size: 2em;
`

const Contact_Mini = (): JSX.Element => {
  return (
    <DivContact>
      <SpanContact>Contact</SpanContact>
      <Socials_Icons fontsize="2em" />
    </DivContact>
  )
}

export default Contact_Mini
