import React from 'react'
import ProductDisplay from '../molecules/ProductDisplay.jsx';

export default function ProductGrid(props) {

  const {products,handleAddToCart} = props

  return (
    <>
    {products.map(p =>
      (
        <ProductDisplay key={p.id} product={p} handleAddToCart = {handleAddToCart} />
      )
    )}
    </>
  )
}
