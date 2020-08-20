import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

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
          <Link to="/">Illustrations</Link>
        </li>
        <li>
          <Link to="/">UX/UI</Link>
        </li>
        <li>
          <AnchorLink to="/#about">About</AnchorLink>
        </li>
      </ul>
    </StyledNav>
  )
}

export default MainNav
