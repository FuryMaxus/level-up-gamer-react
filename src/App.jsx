import { useState } from 'react'
import './App.css'

import Home from './components/pages/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './components/pages/About'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/acerca-de' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
