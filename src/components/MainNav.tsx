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

      > a {
        font-family: Colus, serif;
        font-size: 2em;
        text-transform: uppercase;
      }
    }
  }
`

const MainNav: React.FC = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Illustrations</Link>
        </li>
        <li>
          <Link to="/">UX/UI</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default MainNav
