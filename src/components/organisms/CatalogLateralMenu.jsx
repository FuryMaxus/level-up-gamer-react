import React from 'react'
import { CategoryBrands } from "../../data/CategoryBrands.js"
import RadioGroup from '../molecules/RadioGroup.jsx';

export default function CatalogLateralMenu(
    {
        category,
        brand,
        setBrand,
        condition,
        setCondition,
    }
) {

    const categoryBrands = CategoryBrands.find((c) => c.category === category);

  return (
    <section id="lateral-menu">

            <div id="category-name-container">
                <h1 id="category-name">Computadores Gamers</h1>
            </div>
            
            <RadioGroup 
                title= "Marcas"
                name="brands"
                options={[
                    { label: "Todas", value: "all" },
                    ...categoryBrands.brands.map((b) =>({
                    label: b.name,
                    value: b.name
                    }))
                ]}
                selected={brand}
                onChange={setBrand}
            />
           
            {/* Esto tengo que arreglarlo que no funciona */}
            <div className="slider-container">
                <h2>Limite de Precios</h2>
                <label htmlFor="priceRange"></label>
                <input type="range" id="priceRange" min="0" max="1000" value="1000" step="10"/>
            </div>
            
            <RadioGroup
                title="Condicion"
                name="condition"
                options={[
                    {label: "Todos", value: "all"},
                    {label: "Nuevo", value: "new"},
                    {label: "Caja abierta", value: "open"},
                    {label: "Segunda Mano", value: "second"}  
                ]}
                selected={condition}
                onChange={setCondition}
            />
        </section>
  )
}
