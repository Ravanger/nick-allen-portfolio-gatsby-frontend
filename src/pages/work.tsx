import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import { AnimateSharedLayout, motion } from 'framer-motion'

import SEO from '@components/SEO'
import AccordionItem from '@components/AccordionItem'

const DivProjects = styled(motion.div)`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: auto;
  margin-left: 4rem;
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
    <>
      <SEO title="Work" />
      <AnimateSharedLayout>
        <DivProjects layout>
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
      </AnimateSharedLayout>
    </>
  )
}

export default WorkPage
