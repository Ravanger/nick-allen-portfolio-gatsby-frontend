// TODO: onClick - if goto page - play enter1 animation
// else if leave page - play enter2(exit) animation

import React from 'react'
import { Link } from 'gatsby'
// import { motion } from 'framer-motion'

type SpinningMenuProps = {
  currentPage: string
}

// const landingMenu = (
//   <>
//     <motion.div
//       key="work"
//       initial={{
//         rotate: -90,
//         top: '50%',
//         y: '-50%',
//         left: '-2.25rem',
//       }}
//     >
//       <Link to="/work">Work</Link>
//     </motion.div>
//     <motion.div
//       key="about"
//       initial={{
//         rotate: 90,
//         top: '50%',
//         y: '-50%',
//         right: '-2.25rem',
//       }}
//     >
//       <Link to="/about">About</Link>
//     </motion.div>
//     <motion.div key="contact" className="verticalcenter bottom">
//       <Link to="/contact">Contact</Link>
//     </motion.div>
//   </>
// )

// const workMenu = (
//   <>
//     <motion.div
//       key="work"
//       animate={{
//         rotate: [-90, -90, 0, 0],
//         top: ['50%', '0%', '0%', '0%'],
//         y: ['-50%', '0%', '0%', '0%'],
//         left: [
//           'calc(-2.25rem + 0%)',
//           'calc(-2.25rem + 0%)',
//           'calc(-2.25rem + 0%)',
//           'calc(50% - 0rem)',
//         ],
//         x: ['0%', '0%', '0%', '-50%'],
//       }}
//       exit={{
//         rotate: [0, 0, -90, -90],
//         top: ['0%', '0%', '0%', '50%'],
//         y: ['0%', '0%', '0%', '-50%'],
//         left: [
//           'calc(50% - 0rem)',
//           'calc(-2.25rem + 0%)',
//           'calc(-2.25rem + 0%)',
//           'calc(-2.25rem + 0%)',
//         ],
//         x: ['-50%', '0%', '0%', '0%'],
//       }}
//     >
//       <Link to="/work">Work</Link>
//     </motion.div>
//     <motion.div
//       key="about"
//       initial={{
//         rotate: 90,
//         top: '50%',
//         y: '-50%',
//         right: '-2.25rem',
//       }}
//     >
//       <Link to="/about">About</Link>
//     </motion.div>
//     <motion.div key="contact" className="verticalcenter bottom">
//       <Link to="/contact">Contact</Link>
//     </motion.div>
//   </>
// )

// const aboutMenu = (
//   <>
//     <motion.div
//       key="work"
//       initial={{
//         rotate: -90,
//         top: '50%',
//         y: '-50%',
//         left: '-2.25rem',
//       }}
//     >
//       <Link to="/work">Work</Link>
//     </motion.div>
//     <motion.div
//       key="about"
//       animate={{
//         rotate: [90, 90, 0, 0],
//         top: ['50%', '0%', '0%', '0%'],
//         y: ['-50%', '0%', '0%', '0%'],
//         right: [
//           'calc(-2.25rem + 0%)',
//           'calc(-2.25rem + 0%)',
//           'calc(-2.25rem + 0%)',
//           'calc(50% - 0rem)',
//         ],
//         x: ['0%', '0%', '0%', '50%'],
//       }}
//       exit={{
//         rotate: [0, 0, 90, 90],
//         top: ['0%', '0%', '0%', '50%'],
//         y: ['0%', '0%', '0%', '-50%'],
//         right: [
//           'calc(50% - 0rem)',
//           'calc(-2.25rem + 0%)',
//           'calc(-2.25rem + 0%)',
//           'calc(-2.25rem + 0%)',
//         ],
//         x: ['50%', '0%', '0%', '0%'],
//       }}
//     >
//       <Link to="/about">About</Link>
//     </motion.div>
//     <motion.div key="contact" className="verticalcenter bottom">
//       <Link to="/contact">Contact</Link>
//     </motion.div>
//   </>
// )

const FullscreenMainMenu = (props: SpinningMenuProps) => {
  return (
    <>
      {props.currentPage.indexOf('/work') === -1 && (
        <Link to="/work" className="horizontalcenter left">
          Work
        </Link>
      )}
      {props.currentPage.indexOf('/about') === -1 && (
        <Link to="/about" className="horizontalcenter right">
          About
        </Link>
      )}
      {props.currentPage.indexOf('/contact') === -1 && (
        <Link to="/contact" className="verticalcenter bottom">
          Contact
        </Link>
      )}
    </>
  )
}

export default FullscreenMainMenu
