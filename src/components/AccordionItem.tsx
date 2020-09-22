import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Collapse } from 'react-collapse'
import ReactMarkdown from 'react-markdown'

interface Props {
  item: {
    title: string
    description: string
  }
}

const SectionAccordionItem = styled.section`
  margin-bottom: 1rem;

  p,
  ul,
  ol {
    margin-bottom: 1rem;
  }

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
    max-width: 36rem;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    line-height: 1.25rem;
    white-space: pre-line;
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  ul {
    list-style: initial;
  }

  ol {
    list-style: decimal;
  }

  img {
    width: 100%;
  }

  .ReactCollapse--collapse {
    transition: height 500ms;
  }
`

const AccordionItem = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <SectionAccordionItem>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '▾' : '▸'}
        {props.item.title}
      </button>
      <Collapse isOpened={isOpen}>
        <ReactMarkdown>{props.item.description}</ReactMarkdown>
      </Collapse>
    </SectionAccordionItem>
  )
}

export default AccordionItem
