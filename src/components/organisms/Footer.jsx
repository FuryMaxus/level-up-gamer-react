import React from 'react'
import Icon from '../atoms/Icon'
import Button from '../atoms/Button'
import '../../styles/Footer.css'

export default function Footer() {
  return (
    <footer>
      <div id="footer-top">
          <div>
            <img src="images/Level-Up.png" alt="logo level-up gamer" id="logo"/>
            <h3>Siguenos</h3>
            <div className="contact-links-container">
              <Icon path="#" iconClass="fa-brands fa-facebook"/>
              <Icon path="#" iconClass="fa-brands fa-x-twitter"/>
              <Icon path="#" iconClass="fa-brands fa-instagram"/>
              <Icon path="#" iconClass="fa-brands fa-tiktok"/>
              <Icon path="#" iconClass="fa-brands fa-youtube"/>
            </div>
          </div>
          <form action="#" to='/'>
            <label htmlFor="subscription-input"><h3>Mantente Informado</h3></label>
            <input name="subscription-input" type="text" placeholder="Ingresa tu correo!"/>
            <Button text = "Subscribete" />
          </form>
          <div id="interest-sites-container">
            <h2>Sitios de Interes</h2>
            <a href="#"><p>Contactanos</p></a>
            <a href="#"><p>Nuestras Garantias</p></a>
            <a href="#"><p>Terminos y condiciones</p></a>
          </div>
          <div id="contact-us-container">
            <h2>Contactenos</h2>
            <p>consultas@levelupgamer.cl</p>
            <p>+56 9 3581 1266</p>
          </div>
      </div>
      <div id="footer-bottom">
        <div><span>2025 Level Up Gamer</span>. Todos los derechos reservados</div>
      </div>
      <img id="whatsaap-absolute" src="images/whatsaap_icon.png" alt="whatsaap"></img>
    </footer>
  )
}
