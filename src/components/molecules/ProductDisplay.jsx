import React from 'react'
import Button from '../atoms/Button';

export default function ProductDisplay(props) {

  const {product} = props
  
  return (
    <div className="product">
      <img src={product.imgUrl} alt= {product.name} />
      <div className="product-info">
          <p>{product.brand}</p>
          <p>{product.name}</p>
          <p>{correctConditionText(product.condition)}</p>
          <p>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(product.price)}</p>
      </div>
      <Button text='Añadir al carro' onClick={()=>addToCart(product)} />
    </div>
  )
}



function addToCart(product) {
    const products = JSON.parse(localStorage.getItem("products")) || []
    products.push(product)
    localStorage.setItem("products", JSON.stringify(products))
    
}

function correctConditionText(t){
  if(t == 'new'){
    return "Nuevo"
  }else if(t == 'open'){
    return "Caja abierta"
  }else if(t == 'second'){
    return "Segunda mano"
  }
}