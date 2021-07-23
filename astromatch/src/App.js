import React, { useState } from 'react'

import MainScreen from './Screens/MainScren'
import MatchScreen from './Screens/MatchScren'
import Header from './Components/Header'

import { AppContainer, PageContainer } from './styled'

export default function App() {
  const [currentPage, setCurrentPage] = useState(true)

  const setPage = () => {
    setCurrentPage(!currentPage)
  }

  return (
    <AppContainer>
      <PageContainer>
        <Header setPage={setPage} currentPage={currentPage} />
        {currentPage ? <MainScreen /> : <MatchScreen />}
      </PageContainer>
    </AppContainer>
  )
}
