import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function Header(props) {

  const {cartProducts} = props;

  const location = useLocation();

  const headerButtonsData = [
    { text: 'Inicio', url: '/' },
    { text: 'Catalogo', url: '/catalogo' },
    { text: 'Level Up', url: '/level-up' },
    { text: 'Noticias', url: '/noticias' },
    { text: 'Acerca de', url: '/acerca-de' },
  ];

  const productQuantity = cartProducts.length;


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
          <Icon path="/carrito" variant="cart-icon" iconClass="fa-solid fa-cart-shopping icono-header" quantity={productQuantity}/>
          <Icon path="/inicio-sesion" iconClass="fa-regular fa-user icono-header"/>
          <Icon path="/registrarse" iconClass="fa-solid fa-user-plus icono-header"/>
        </div>
      </div>
      <nav id="header-bottom">
        {headerButtonsData.map((btn) => (
          <Button
            key={btn.url}
            text={btn.text}
            url={btn.url}
            className={clsx("header-button", {
            "selected-button-header": location.pathname === btn.url
            })}
          />
        ))}
      </nav>
    </header>
  )
}
