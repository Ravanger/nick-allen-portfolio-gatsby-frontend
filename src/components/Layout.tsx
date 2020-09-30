import React from 'react'
import styled from '@emotion/styled'
import { motion, AnimatePresence } from 'framer-motion'

import Header from '@components/Header'
import FullscreenMainMenu from '@components/FullscreenMainMenu'
import { Link } from 'gatsby'

const duration = 0.2

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

const DivSpinningMenu = styled.div`
  width: 100%;
  height: calc(100% - 6rem);
  top: 6rem;
  position: absolute;

  > a,
  > div {
    transform-origin: center;
    font-size: 2rem;
    background-color: var(--main-bg-color);
    position: absolute;
    font-family: Colus, serif;
    padding: 0 0.5em;
    z-index: 20;
    text-align: center;
  }

  .verticalcenter {
    left: 50%;
    transform: translateX(-50%);
  }

  .horizontalcenter {
    top: 50%;
  }

  .left {
    transform: translateY(-75%) rotateZ(-90deg);
    left: -2.25rem;
  }

  .right {
    transform: translateY(-75%) rotateZ(90deg);
    right: -2.25rem;
  }

  .bottom {
    top: calc(100% - 3rem);
  }
`

const returnCurrentPageLink = (currentPage: string) => {
  switch (currentPage) {
    case '/work':
    case '/work/':
      return (
        <AnimatePresence>
          <motion.div
            key="work"
            animate={{
              rotate: [-90, -90, 0, 0],
              top: ['50%', '0%', '0%', '0%'],
              left: [
                'calc(-2.25rem + 0%)',
                'calc(-2.25rem + 0%)',
                'calc(-2.25rem + 0%)',
                'calc(50% - 0rem)',
              ],
              y: ['-50%', '0%', '0%', '0%'],
              x: ['0%', '0%', '0%', '-50%'],
            }}
            initial={{
              rotate: 0,
              top: '0%',
              left: 'calc(50% - 0rem)',
              y: '0%',
              x: '-50%',
            }}
            exit={{
              rotate: [0, 0, -90, -90],
              top: ['0%', '0%', '0%', '50%'],
              left: [
                'calc(50% - 0rem)',
                'calc(-2.25rem + 0%)',
                'calc(-2.25rem + 0%)',
                'calc(-2.25rem + 0%)',
              ],
              y: ['0%', '0%', '0%', '-50%'],
              x: ['-50%', '0%', '0%', '0%'],
            }}
          >
            <Link to="/work">Work</Link>
          </motion.div>
        </AnimatePresence>
      )
    case '/about':
    case '/about/':
      return (
        <AnimatePresence>
          <motion.div
            key="about"
            animate={{
              rotate: [90, 90, 0, 0],
              top: ['50%', '0%', '0%', '0%'],
              right: [
                'calc(-2.25rem + 0%)',
                'calc(-2.25rem + 0%)',
                'calc(-2.25rem + 0%)',
                'calc(50% - 0rem)',
              ],
              y: ['-50%', '0%', '0%', '0%'],
              x: ['0%', '0%', '0%', '50%'],
            }}
            initial={{
              rotate: 0,
              top: '0%',
              right: 'calc(50% - 0rem)',
              y: '0%',
              x: '50%',
            }}
            exit={{
              rotate: [0, 0, 90, 90],
              top: ['0%', '0%', '0%', '50%'],
              right: [
                'calc(50% - 0rem)',
                'calc(-2.25rem + 0%)',
                'calc(-2.25rem + 0%)',
                'calc(-2.25rem + 0%)',
              ],
              y: ['0%', '0%', '0%', '-50%'],
              x: ['50%', '0%', '0%', '0%'],
            }}
          >
            <Link to="/about">About</Link>
          </motion.div>
        </AnimatePresence>
      )
    case '/contact':
    case '/contact/':
      return (
        <AnimatePresence initial={false}>
          <motion.div
            key="contact"
            className="verticalcenter bottom"
            initial={false}
            animate={{
              top: ['calc(100% - 3rem)', 'calc(0% - 0rem)'],
            }}
            exit={{
              top: 'calc(100% - 3rem)',
            }}
            transition={{ duration: 0.4 }}
          >
            <Link to="/contact">Contact</Link>
          </motion.div>
        </AnimatePresence>
      )
    default:
      return null
  }
}

const Layout: React.FC = props => {
  const currentPage = typeof location !== 'undefined' ? location.pathname : ''

  return (
    <>
      <Header />
      <DivSpinningMenu>
        <FullscreenMainMenu currentPage={currentPage} />
        {returnCurrentPageLink(currentPage)}
      </DivSpinningMenu>
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
