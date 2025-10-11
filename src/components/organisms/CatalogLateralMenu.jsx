import React from 'react'
import { CategoryBrands } from "../../data/CategoryBrands.js"
import RadioGroup from '../molecules/RadioGroup.jsx';
import Slider from '../atoms/Slider.jsx';

export default function CatalogLateralMenu(props) {

    const {
        category,
        brand,
        setBrand,
        condition,
        setCondition,
        brandSet,
        products} = props

    
    
  return (
    <section id="lateral-menu">

            <div id="category-name-container">
                <h1 id="category-name">{category}</h1>
            </div>
            
            <RadioGroup 
                title= "Marcas"
                name="brands"
                options={[
                    { label: "Todas", value: "all" },
                    ...[...brandSet].map((b) =>({
                    label: b,
                    value: b
                    }))
                ]}
                selected={brand}
                onChange={setBrand}
            />
           
            <Slider 
                title="Limite de precios" 
                id="slider-filtro-precios" 
                max={999999}
            />
            
            <RadioGroup
                title="Condicion"
                name="condition"
                options={[
                    {label: "Todos", value: "all"},
                    {label: "Nuevo", value: "new"},
                    {label: "Caja abierta", value: "open"},
                    {label: "Segunda mano", value: "second"}  
                ]}
                selected={condition}
                onChange={setCondition}
            />
        </section>
  )
}
