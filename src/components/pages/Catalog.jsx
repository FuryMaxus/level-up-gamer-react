import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

export default function Catalog() {
  return (
    <>
      <Header/>
      <main id='catalog-main'>
        <section id="lateral-menu">
            <div id="category-name-container">
                <h1 id="category-name">Computadores Gamers</h1>
            </div>
            <div >
                <h2>Marcas</h2>
                <div id="brands-container" className="radio-container"></div>
            </div>
            <div class="slider-container">
                <h2>Limite de Precios</h2>
                <label for="priceRange"></label>
                <input type="range" id="priceRange" min="0" max="1000" value="1000" step="10"/>
            </div>
            <div class="radio-container">
                <h2>Condicion</h2>
                <label>
                    <input type="radio" name="condition" value="all" checked/>
                    Todos
                </label>
                <label>
                    <input type="radio" name="condition" value="new"/>
                    Nuevo
                </label>
                <label>
                    <input type="radio" name="condition" value="open"/>
                    Caja abierta
                </label>
                <label>
                    <input type="radio" name="condition" value="second"/>
                    Segunda mano
                </label>
            </div>
        </section>
        <section id="main-catalog-container">
            <div id="category-selector-container">
                <button id="btn-pc" className="btn-category current-category">
                    <img src="images/pc_gamer_example.png" alt="pc gamer"/>
                    <span>PCs Gamer</span>
                </button>
                <button className="btn-category" id="btn-table">
                    <img src="images/table_top_game_example.png" alt=""/>
                    <span>Juegos de mesa</span>
                </button>
                <button className="btn-category" id="btn-accesories">
                    <img src="images/accesories_example.png" alt=""/>
                    <span>Accesorios</span>
                </button>
                <button className="btn-category" id="btn-console">
                    <img src="images/console_example.png" alt=""/>
                    <span>Consolas</span>
                </button>
                <button className="btn-category" id="btn-chair">
                    <img src="images/game_chair_example.png" alt=""/>
                    <span>Sillas Gamer</span>
                </button>
                <button className="btn-category" id="btn-mouse">
                    <img src="images/mouse_example.webp" alt=""/>
                    <span>Mouses</span>
                </button>
                <button className="btn-category" id="btn-pad">
                    <img src="images/mousepad_example.webp" alt=""/>
                    <span>Mousepads</span>
                </button>
                <button className="btn-category" id="btn-polera">
                    <img src="images/polera_example.webp" alt=""/>
                    <span>Poleras</span>
                </button>
                <button className="btn-category" id="btn-poleron">
                    <img src="images/poleron_example.png" alt=""/>
                    <span>Polerones</span>
                </button>
                <button className="btn-category" id="btn-service">
                    <img src="images/servicio_tecnico.png" alt=""/>
                    <span>Servicio Tecnico</span>
                </button>
            </div>
            <div id="top-menu" className="vertical-catalog-menu-container">
                <select>
                    <option value="recommended">Recomendado</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                </select>
                <nav>
                    <ul class="pagination-list">
                        <li><a className="disabled-link" href="#prev">&laquo;</a></li>  
                        <li><a className="current-page active" href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a className="disabled-link" href="#">...</a></li>
                        <li><a href="#">50</a></li>
                        <li><a href="#">&raquo;</a></li>
                    </ul>
                </nav>
            </div>
            <div id="product-grid">
            </div>
            <div id="bottom-menu" className="vertical-catalog-menu-container">
                <nav>
                    <ul class="pagination-list">
                        <li><a className="disabled-link" href="#prev">&laquo;</a></li>
                        <li><a className="current-page active" href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a className="disabled-link" href="#">...</a></li>
                        <li><a href="#">50</a></li>
                        <li><a href="#">&raquo;</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    </main>
      <Footer/>
      <img id="whatsaap-absolute" src="images/whatsaap_icon.png" alt="whatsaap"></img>
    </>
  )
}
