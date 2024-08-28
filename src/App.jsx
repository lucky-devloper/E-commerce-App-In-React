import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import Cartproduct from './Components/Cartproduct'

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/cart' element={<Cartproduct />} />
      </Routes>
    </div>
  )
}

export default App