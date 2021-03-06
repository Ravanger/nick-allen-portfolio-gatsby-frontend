import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const StyledNav = styled.nav`
  > ul {
    display: flex;
    > li {
      + li {
        margin-left: 1.5em;
      }

      > a,
      button {
        font-family: Colus, serif;
        font-size: 2em;
        text-transform: uppercase;
      }

      button {
        background: none;
        border: none;
        padding: 0;
        line-height: inherit;
        color: var(--main-text-color);
        cursor: pointer;
      }
    }
  }
`

const MainNav: React.FC = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/work">Work</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default MainNav
