import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

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
            <button data-url="index.html" className="selected-button-header">Inicio</button>
            <button data-url="catalogo.html">Catalogo</button>
            <button data-url="levelUp.html" >Level Up</button>
            <button data-url="noticias.html" >Noticias</button>
            <button data-url="acercaDe.html" >Acerca de</button>
        </nav>  
       
    </header>
  )
}
