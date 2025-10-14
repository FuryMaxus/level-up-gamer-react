import React from 'react'
import '../../styles/LevelUp.css'
export default function LevelUp() {
  return (
    <main id='level-up-main'>
      <section id="level-up-meter-container">
        <h3>Medidor Level-Up</h3>
        <div id="level-up-meter">
          <div id="level-up-meter-level-number">
            <h3>lv 2</h3>
          </div>
          <div id="level-up-meter-progress">
            <p>1300pts</p>
          </div>
        </div>
        <p>1700 pts para subir de nivel</p>
      </section>
      <section id="info-level-up-system-container">
        <h1>Sistema Level-Up</h1>
        <p>
          Consigue punto recomendado la pagina con tu codigo de referidos o en nuestros
          eventos presenciales para canjear puntos y descuentos
        </p>
      </section>   
      <section id="spend-points-container">
        <h3>Gasta tus Puntos!</h3>
        <div>
          <button>Canjear Productos</button>
          <button>Canjear Descuentos</button>
        </div>
      </section>
      <section id="event-map-container">
        <h3>Mapa de eventos</h3>
        <img src="images/mapa_chile.png" alt="" />
      </section>
    </main>
  )
}
