import { useState } from 'react'
import './styles/App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

import Home from './components/pages/Home'
import About from './components/pages/About'
import LevelUp from './components/pages/LevelUp'
import Catalog from './components/pages/Catalog'
import News from './components/pages/News'
import Cart from './components/pages/Cart'
import Login from './components/pages/Login'
import SignOn from './components/pages/SignOn'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/acerca-de' element={<About />}/>
        <Route path='/catalogo' element={<Catalog />}/>
        <Route path='/level-up' element={<LevelUp />}/>
        <Route path='/noticias' element={<News />}/>
        <Route path='/carrito' element={<Cart />}/>
        <Route path='/inicio-sesion' element={<Login />}/>
        <Route path='/registrarse' element={<SignOn />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
