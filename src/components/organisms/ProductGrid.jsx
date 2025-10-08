import React from 'react'
import { Categories } from "../../data/Categories.js"
import { Products } from "../../data/Products.js"
import ProductDisplay from '../molecules/ProductDisplay.jsx';

export default function ProductGrid({category}) {

    const products = Products.filter((p) => p.category === category);
    
    
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
