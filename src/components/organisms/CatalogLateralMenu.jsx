import React from 'react'
import RadioGroup from '../molecules/RadioGroup.jsx';
import Slider from '../atoms/Slider.jsx';

export default function CatalogLateralMenu(props) {

  const {
    category,
    brand,
    setBrand,
    productCondition,
    setProductCondition,
    brandSet,
    selectedPrice,
    setSelectedPrice,
    maxPrice
  } = props

   
    
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
        max={maxPrice}
        value = {selectedPrice}
        onChange = {(e) => setSelectedPrice(Number(e.target.value))}
      />
      
      <RadioGroup
        title="Condicion"
        name="productCondition"
        options={[
          {label: "Todos", value: "all"},
          {label: "Nuevo", value: "new"},
          {label: "Caja abierta", value: "open"},
          {label: "Segunda mano", value: "second"}  
        ]}
        selected={productCondition}
        onChange={setProductCondition}
      />
    </section>
  )
}
