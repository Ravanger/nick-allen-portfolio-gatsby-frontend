import React, { useState } from 'react'
import styled from '@emotion/styled'

interface Props {
  item: {
    id: number
    title: string
    description: string
  }
}

const SectionAccordtionItem = styled.section`
  margin-bottom: 2rem;

  > button {
    font-family: Colus, serif;
    font-size: 3rem;
    margin-bottom: 1rem;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  > p {
    max-width: 36rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    line-height: 1.25rem;
  }

  .max-height {
    max-height: initial;
  }
`

const AccordionItem = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <SectionAccordtionItem key={props.item.id}>
      <button onClick={() => setIsOpen(!isOpen)}>{props.item.title}</button>
      <p className={isOpen ? 'max-height' : ''}>{props.item.description}</p>
    </SectionAccordtionItem>
  )
}

export default AccordionItem
