import React, { useState } from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import CatalogLateralMenu from '../organisms/CatalogLateralMenu'
import ProductGrid from '../organisms/ProductGrid'
import CatalogCategorySelector from '../organisms/CatalogCategorySelector'
import { Categories } from '../../data/Categories'

export default function Catalog() {

    const [category, setCategory] = useState(Categories.PC_GAMERS);
    const [brand, setBrand] = useState("all");
    const [condition, setCondition] = useState("all");

  return (
    <>
      <Header/>
      <main id='catalog-main'>
        <CatalogLateralMenu
            selectedCategory={category}
            setCategory={setCategory}
            brand={brand}
            setBrand={setBrand}
            condition={condition}
            setCondition={setCondition}
        />
        <section id="main-catalog-container">
            <CatalogCategorySelector category={category} setCategory={setCategory}/>
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
                <ProductGrid category={category}/>
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
      
    </>
  )
}
