import React, { useState } from 'react'
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'
import { AnimatePresence, motion } from 'framer-motion'

interface AccordionProps {
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

  span {
    display: inline-block;
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

const AccordionItem = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <SectionAccordionItem>
      <button onClick={() => setIsOpen(!isOpen)}>
        <motion.span initial={false} animate={{ rotate: isOpen ? 90 : 0 }}>
          ▸
        </motion.span>
        {props.item.title}
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0, 0.62, 0.23, 1] }}
          >
            <ReactMarkdown>{props.item.description}</ReactMarkdown>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionAccordionItem>
  )
}

export default AccordionItem
