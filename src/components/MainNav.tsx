import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type MainNavProps = {
  handlePageChange?: React.Dispatch<number | undefined>
}

const PAGE_NAV = {
  ABOUT_PAGE: 1,
}

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

const MainNav: React.FC<MainNavProps> = props => {
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
          <button
            onClick={() =>
              props.handlePageChange &&
              props.handlePageChange(PAGE_NAV.ABOUT_PAGE)
            }
          >
            About
          </button>
        </li>
      </ul>
    </StyledNav>
  )
}

export default MainNav
