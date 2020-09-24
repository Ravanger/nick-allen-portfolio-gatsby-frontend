import React from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'

import Header from '@components/Header'
import SpinningMainMenu from './SpinningMainMenu'

const duration = 1

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

const variants = {
  initial: {
    opacity: 0,
    scale: 0.99,
    y: '20%',
  },
  enter: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: duration,
      delay: duration,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: duration },
  },
}

const Layout: React.FC = props => {
  return (
    <>
      <Header />
      <SpinningMainMenu />
      <MainContent>
        <AnimatePresence initial={false}>
          <motion.div
            key={typeof location !== 'undefined' ? location.pathname : ''}
            variants={variants}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            {props.children}
          </motion.div>
        </AnimatePresence>
      </MainContent>
    </>
  )
}

export default Layout
