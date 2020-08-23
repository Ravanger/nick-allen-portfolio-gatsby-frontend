import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Collapse } from 'react-collapse'

interface Props {
  item: {
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

  p {
    font-size: 1.2rem;
    width: 36rem;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    line-height: 1.25rem;
    white-space: pre-line;
  }

  .ReactCollapse--collapse {
    transition: height 500ms;
  }
`

const AccordionItem = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <SectionAccordtionItem>
      <button onClick={() => setIsOpen(!isOpen)}>{props.item.title}</button>
      <Collapse isOpened={isOpen}>
        <p>{props.item.description}</p>
      </Collapse>
    </SectionAccordtionItem>
  )
}

export default AccordionItem
