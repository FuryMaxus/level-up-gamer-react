import React, { useState } from 'react'
import Button from '../atoms/Button';

export default function CartList() {
  
  const products = JSON.parse(localStorage.getItem("products")) || [];
  
  return (
    <section id="cart-products-container">
          <h1>Carro</h1>
          <div id="checkbox-select-all-container">
            <input type="checkbox" name="" id="" checked/>
            <label for="">Seleccionar todos</label>
          </div>
          <hr/>
          {
            products.map(p => (
              <div class="cart-product">
              <input type="checkbox" name="cart-product-selected" id="product1" checked/>
              <img src={p.imgUrl} alt=""/>
              <div>
                  <h3>{p.name}</h3>
                  <p>{p.brand}</p>
              </div>
              <div>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(p.price)}</div>
              <Button text="Eliminar" onClick = {()=>localStorage.removeItem('products')}/>
          </div>
            ))
          }
        </section>
  )
}
