import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata.title

  return (
    <header>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
