import React from 'react'
import Button from '../atoms/Button';

export default function ProductDisplay({producto}) {

    if (!producto) return null;
  return (
    <div class="product">
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
