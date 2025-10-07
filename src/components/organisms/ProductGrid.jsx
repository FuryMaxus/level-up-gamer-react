import React from 'react'
import { Categories } from "../../data/Categories.js"
import { Products } from "../../data/Products.js"
import ProductDisplay from '../molecules/ProductDisplay.jsx';

export default function ProductGrid({selectedCategory = Categories.PC_GAMERS}) {

    const products = Products.filter((p) => p.category === selectedCategory);
    
    
  return (
    <>
    {products.map(p =>
        (
           <ProductDisplay key={p.id} producto={p} />
           
        )
    )}
    </>
  )
}
