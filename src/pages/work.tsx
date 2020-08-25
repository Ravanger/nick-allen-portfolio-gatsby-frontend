import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import AccordionItem from '@components/AccordionItem'

const DivProjects = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin-left: 4rem;
  padding-top: 7rem;
`

const WorkPage: React.FC = () => {
  const { allStrapiUxProjects } = useStaticQuery(graphql`
    query {
      allStrapiUxProjects {
        nodes {
          Title
          Description
          strapiId
        }
      }
    }
  `)

  return (
    <Layout linkLeft="work" linkRight="about">
      <SEO title="Work" />
      <DivProjects>
        {allStrapiUxProjects.nodes ? (
          allStrapiUxProjects.nodes.map((item: any) => (
            <AccordionItem
              item={{ title: item.Title, description: item.Description }}
              key={item.strapiId}
            />
          ))
        ) : (
          <p>Nothing to see here</p>
        )}
      </DivProjects>
    </Layout>
  )
}

export default WorkPage
