import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';
import { useLocation, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useCart } from '../../context/CartContext';
import '../../styles/Header.css'

export default function Header() {

  const { cartProducts,totalQuantity } = useCart();

  const location = useLocation();

  const headerButtonsData = [
    { text: 'Inicio', url: '/' },
    { text: 'Catalogo', url: '/catalogo' },
    { text: 'Level Up', url: '/level-up' },
    { text: 'Noticias', url: '/noticias' },
    { text: 'Acerca de', url: '/acerca-de' },
  ];

  const productQuantity = totalQuantity;
  
  const navigate = useNavigate();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <header>
      <div id="header-top">
        <div id="logo-container">
          <img src="images/Level-Up.png" alt="logo level-up gamer" id="logo" onClick={() => navigate("/")}/>
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

      <button id="hamburger" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
      </button>

     
      <nav id="header-bottom" className={menuOpen ? "open" : ""}>
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
