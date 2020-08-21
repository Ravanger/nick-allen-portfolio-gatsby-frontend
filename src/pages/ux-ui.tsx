import React from 'react'
import styled from '@emotion/styled'

import Layout from '@components/Layout'
import SEO from '@components/SEO'
import AccordionItem from '@components/AccordionItem'

const mockData = [
  {
    id: 0,
    title: 'Rift',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, porro! Exercitationem, ducimus laudantium magnam cupiditate cumque repudiandae illo, enim nisi quod adipisci non necessitatibus rem accusantium dignissimos sunt ipsum a?',
  },
  {
    id: 1,
    title: 'NEXT GBC',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, porro! Exercitationem, ducimus laudantium magnam cupiditate cumque repudiandae illo, enim nisi quod adipisci non necessitatibus rem accusantium dignissimos sunt ipsum a?',
  },
  {
    id: 2,
    title: 'Adigo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, porro! Exercitationem, ducimus laudantium magnam cupiditate cumque repudiandae illo, enim nisi quod adipisci non necessitatibus rem accusantium dignissimos sunt ipsum a?',
  },
  {
    id: 3,
    title: 'Health numeracy project',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, porro! Exercitationem, ducimus laudantium magnam cupiditate cumque repudiandae illo, enim nisi quod adipisci non necessitatibus rem accusantium dignissimos sunt ipsum a?',
  },
]

const DivProjects = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  margin-left: 4rem;
  padding-top: 4rem;
`

const UxuiPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="UX/UI" />
      <DivProjects>
        {mockData && mockData.map(item => <AccordionItem item={item} />)}
      </DivProjects>
    </Layout>
  )
}

export default UxuiPage
