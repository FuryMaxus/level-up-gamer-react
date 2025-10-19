import { useEffect, useState } from 'react'
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
import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'
import { CartProvider } from './context/CartContext'
import ProductDetail from './components/pages/ProductDetail'


function App() {
  return (
      <BrowserRouter>
        <CartProvider>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/acerca-de' element={<About />}/>
            <Route path='/catalogo' element={<Catalog/>}/>
            <Route path='/level-up' element={<LevelUp/>}/>
            <Route path='/noticias' element={<News/>}/>
            <Route path='/carrito' element={<Cart/>}/>
            <Route path='/inicio-sesion' element={<Login/>}/>
            <Route path='/registrarse' element={<SignOn/>}/>
            <Route path='/catalogo/detalle/:id' element={<ProductDetail/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
      </BrowserRouter>
  )
}

export default App
