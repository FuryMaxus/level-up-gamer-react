import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import CatalogLateralMenu from '../organisms/CatalogLateralMenu'
import ProductGrid from '../organisms/ProductGrid'
import CatalogCategorySelector from '../organisms/CatalogCategorySelector'

export default function Catalog() {
  return (
    <>
      <Header/>
      <main id='catalog-main'>
        <CatalogLateralMenu/>
        <section id="main-catalog-container">
            <CatalogCategorySelector/>
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
                <ProductGrid />
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
