import React from 'react'
import Button from '../atoms/Button';

export default function ProductDisplay(props) {
    const {producto} = props
    
  return (
    <div className="product">
                <img src={producto.imgRute} alt= {producto.name} />
                <div className="product-info">
                    <p>{producto.brand}</p>
                    <p>{producto.name}</p>
                    <p>{producto.price}</p>
                </div>
                <Button text='Añadir al carro'/>
    </div>
  )
}
