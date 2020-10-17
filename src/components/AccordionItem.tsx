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

const SectionAccordionItem = styled(motion.section)`
  p,
  ul,
  ol {
    margin-bottom: 1rem;
  }

  > button {
    font-family: Colus, serif;
    background: var(--main-bg-color);
    font-size: 3rem;
    border: none;
    padding: 0.5em;
    cursor: pointer;
    position: sticky;
    top: 0;
  }

  > div {
    margin: auto;
    max-width: 28rem;
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
`

const AccordionItem = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <SectionAccordionItem layout>
      <motion.button layout onClick={() => setIsOpen(!isOpen)}>
        <motion.span
          layout
          initial={false}
          animate={{ rotate: isOpen ? 90 : 0 }}
        >
          ▸
        </motion.span>
        {props.item.title}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1 },
              collapsed: { opacity: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <ReactMarkdown>{props.item.description}</ReactMarkdown>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionAccordionItem>
  )
}

export default AccordionItem
