import React from 'react'
import styled from '@emotion/styled'

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  text-align: center;
  align-items: center;
  max-width: 36rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > h1 {
    font-family: Colus, serif;
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  > p {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`

const AboutPage: React.FC = () => {
  return (
    <>
      <DivContent>
        <h1>Hi, I'm Nick</h1>
        <p>Boop boop.</p>
      </DivContent>
    </>
  )
}

export default AboutPage
