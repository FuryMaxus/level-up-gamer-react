import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import CatalogLateralMenu from '../organisms/CatalogLateralMenu'

export default function Catalog() {
  return (
    <>
      <Header/>
      <main id='catalog-main'>
        <CatalogLateralMenu/>
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
                    <ul className="pagination-list">
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
                    <ul className="pagination-list">
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
