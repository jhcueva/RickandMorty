import React from 'react'
import { GlobalContainer } from '../containers/GlobalContainer.jsx'
import { MemoryGame } from '../components/MemoryGame/MemoryGame'
import { Layout } from '../components/Layout/index'


export const Play = () => {
  return (
    <GlobalContainer>
      <Layout title='Memory Game'/>
      <h2 className='dark:text-white text-center text-4xl py-7'>Memory Game</h2>
      <MemoryGame />
    </GlobalContainer>
  )
}
