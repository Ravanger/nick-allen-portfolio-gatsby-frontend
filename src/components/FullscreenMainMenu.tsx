import React from 'react'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'

type SpinningMenuProps = {
  currentPage: string
  previousPage: string
}

const DivSpinningMenu = styled.div`
  width: 100%;
  height: calc(100% - 6rem);
  top: 6rem;
  position: absolute;

  div {
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

const FullscreenMainMenu = (props: SpinningMenuProps) => {
  return (
    <DivSpinningMenu>
      <motion.div
        className="horizontalcenter left"
        animate={
          props.currentPage.indexOf('work') !== -1
            ? {
                rotate: [-90, -90, 0, 0],
                top: ['50%', '0%', '0%', '0%'],
                left: [
                  'calc(-2.25rem + 0vw)',
                  'calc(-2.25rem + 0vw)',
                  'calc(-2.25rem + 0vw)',
                  'calc(50vw - 0rem)',
                ],
                y: ['-50%', '0%', '0%', '0%'],
                x: ['0%', '0%', '0%', '-50%'],
              }
            : props.previousPage.indexOf('work') !== -1
            ? {
                rotate: [0, 0, -90, -90],
                top: ['0%', '0%', '0%', '50%'],
                left: [
                  'calc(50vw - 0rem)',
                  'calc(-2.25rem + 0vw)',
                  'calc(-2.25rem + 0vw)',
                  'calc(-2.25rem + 0vw)',
                ],
                y: ['0%', '0%', '0%', '-50%'],
                x: ['-50%', '0%', '0%', '0%'],
              }
            : false
        }
      >
        <Link to="/work">Work</Link>
      </motion.div>
      <motion.div
        className="horizontalcenter right"
        animate={
          props.currentPage.indexOf('about') !== -1
            ? {
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
              }
            : props.previousPage.indexOf('about') !== -1
            ? {
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
              }
            : false
        }
      >
        <Link to="/about">About</Link>
      </motion.div>
      <motion.div
        className="verticalcenter bottom"
        animate={
          props.currentPage.indexOf('contact') !== -1
            ? {
                top: ['calc(100% - 3rem)', 'calc(0% - 0rem)'],
              }
            : props.previousPage.indexOf('contact') !== -1
            ? {
                top: 'calc(100% - 3rem)',
              }
            : false
        }
        transition={{ duration: 0.4 }}
      >
        <Link to="/contact">Contact</Link>
      </motion.div>
    </DivSpinningMenu>
  )
}

export default FullscreenMainMenu
