import React from 'react'
import { Categories } from "../../data/Categories.js"
import { CategoryBrands } from "../../data/CategoryBrands.js"

export default function CatalogLateralMenu({selectedCategory = Categories.PC_GAMERS}) {

    const categoryBrands = CategoryBrands.find((c) => c.category === selectedCategory);

  return (
    <section id="lateral-menu">
            <div id="category-name-container">
                <h1 id="category-name">Computadores Gamers</h1>
            </div>
            <div>
                <h2>Marcas</h2>
                <div id="brands-container" className="radio-container">
                    {categoryBrands.brands.map(element => 
                    (
                        <label>
                            <input type="radio" name="brand" value={element.name}/>
                            {element.name}
                        </label>
                    )
                    )}
                </div>
            </div>  
            <div className="slider-container">
                <h2>Limite de Precios</h2>
                <label htmlFor="priceRange"></label>
                <input type="range" id="priceRange" min="0" max="1000" value="1000" step="10"/>
            </div>
            <div className="radio-container">
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
  )
}
