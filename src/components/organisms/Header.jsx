import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import NavButton from '../atoms/NavButton';

export default function Header() {
  return (
    <header>
        <div id="header-top">
            <div id="logo-container">
                <img src="images/Level-Up.png" alt="logo level-up gamer" id="logo"/>
            </div>
            <div id="search-bar-container">
                <form action="#">
                    <input type="text" placeholder="Busqueda"/>
                </form>
            </div>
            <div id="session-buttons-container">
                <a href="carro.html" id="cart-icon"><span>3</span><i className="fa-solid fa-cart-shopping icono-header"></i></a>
                <a href="inicioSesion.html"><i className="fa-regular fa-user icono-header"></i></a>
                <a href="form.html"><i className="fa-solid fa-user-plus icono-header"></i></a>
            </div>
        </div>
        <nav id="header-bottom">
            <NavButton text='Inicio' url ='/'/>
            <NavButton text='Catalogo' url ='#'/>
            <NavButton text='Level Up' url ='#'/>
            <NavButton text='Noticias' url ='#'/>
            <NavButton text='Acerca de' url ='#'/>
        </nav>  
    </header>
  )
}
