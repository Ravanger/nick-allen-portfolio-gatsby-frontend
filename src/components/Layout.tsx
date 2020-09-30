import React from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'

import Header from '@components/Header'
import FullscreenMainMenu from '@components/FullscreenMainMenu'

const duration = 0.2

declare global {
  interface Window {
    previousPath: string
  }
}

const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px var(--main-accent-color);
  margin: 0 2rem;
  margin-bottom: 2rem;
  padding-top: 7rem;
  min-height: calc(100vh - 2rem);
  text-align: center;

  > div {
    display: flex;
    min-width: 100%;
    height: calc(100vh - 2rem);
    position: absolute;
    align-items: center;
    justify-content: center;
  }
`

const Layout: React.FC = props => {
  const currentPage =
    typeof window !== 'undefined' && window.location
      ? window.location.pathname
      : ''
  const prevPage =
    typeof window !== 'undefined' && window.previousPath
      ? window.previousPath
      : ''

  return (
    <>
      <Header />
      <FullscreenMainMenu currentPage={currentPage} previousPage={prevPage} />
      <MainContent>
        <AnimatePresence initial={false}>
          <motion.div
            key={currentPage}
            initial={{
              opacity: 0,
              scale: 0.99,
              y: '20%',
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
              transition: {
                duration: duration,
                delay: duration,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.99,
              transition: { duration: duration },
            }}
          >
            {props.children}
          </motion.div>
        </AnimatePresence>
      </MainContent>
    </>
  )
}

export default Layout
