import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home'
import { Character } from './pages/Character'

export const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route index element={<Home />}/>
          <Route path='/detail/:characterId' element={<Character/>}/>
      </Routes>    
    </BrowserRouter>
  )
}
