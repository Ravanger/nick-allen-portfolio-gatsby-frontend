import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const DivSpinningMenu = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  > span {
    display: block;
    font-size: 2rem;
    background-color: var(--main-bg-color);
    position: absolute;
    font-family: Colus, serif;
    padding: 0 0.5em;
    z-index: 20;
    top: 50%;
    text-align: center;
  }

  .left {
    transform: rotate(-90deg) translate(calc(-50% - 2rem));
    transform-origin: left;
    left: 2rem;
  }

  .right {
    transform: rotate(90deg) translate(calc(50% + 2rem));
    transform-origin: right;
    right: 2rem;
  }

  .bottom {
    bottom: 1rem;
    top: auto;
    left: 50%;
    transform: translate(-50%);
  }

  .top {
    top: 6rem;
    left: 50%;
    transform: translate(-50%);
  }
`

const landingMenu = (
  <DivSpinningMenu>
    <span className="left">
      <Link to="/work">Work</Link>
    </span>
    <span className="right">
      <Link to="/about">About</Link>
    </span>
    <span className="bottom">
      <Link to="/contact">Contact</Link>
    </span>
  </DivSpinningMenu>
)

const aboutMenu = (
  <DivSpinningMenu>
    <span className="top">
      <Link to="/about">About</Link>
    </span>
    <span className="left">
      <Link to="/work">Work</Link>
    </span>
    <span className="bottom">
      <Link to="/contact">Contact</Link>
    </span>
  </DivSpinningMenu>
)

const workMenu = (
  <DivSpinningMenu>
    <span className="top">
      <Link to="/work">Work</Link>
    </span>
    <span className="right">
      <Link to="/about">About</Link>
    </span>
    <span className="bottom">
      <Link to="/contact">Contact</Link>
    </span>
  </DivSpinningMenu>
)

const contactMenu = (
  <DivSpinningMenu>
    <span className="top">
      <Link to="/contact">Contact</Link>
    </span>
    <span className="left">
      <Link to="/work">Work</Link>
    </span>
    <span className="right">
      <Link to="/about">About</Link>
    </span>
  </DivSpinningMenu>
)

const SpinningMainMenu = () => {
  const currentPage = typeof location !== 'undefined' ? location.pathname : ''

  switch (currentPage) {
    case '/':
    default:
      return landingMenu
    case '/about':
    case '/about/':
      return aboutMenu
    case '/work':
    case '/work/':
      return workMenu
    case '/contact':
    case '/contact/':
      return contactMenu
  }
}

export default SpinningMainMenu
