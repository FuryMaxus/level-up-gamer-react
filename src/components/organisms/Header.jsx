import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

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
                <Icon path="/carrito" variant="cart-icon" iconClass="fa-solid fa-cart-shopping icono-header" quantity={3}/>
                <Icon path="/inicio-sesion" iconClass="fa-regular fa-user icono-header"/>
                <Icon path="/registrarse" iconClass="fa-solid fa-user-plus icono-header"/>
            </div>
        </div>
        <nav id="header-bottom">
            <Button text='Inicio' url ='/' variant="header-button"/>
            <Button text='Catalogo' url ='/catalogo' variant="header-button"/>
            <Button text='Level Up' url ='/level-up' variant="header-button"/>
            <Button text='Noticias' url ='/noticias' variant="header-button"/>
            <Button text='Acerca de' url ='/acerca-de' variant="header-button"/>
        </nav>  
    </header>
  )
}
