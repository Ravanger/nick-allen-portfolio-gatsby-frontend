import React from 'react'

import MainNav from '@components/MainNav'
import Contact_Mini from '@components/Contact_Mini'

const Header: React.FC = () => {
  return (
    <header>
      <MainNav />
      <Contact_Mini />
    </header>
  )
}

export default Header
