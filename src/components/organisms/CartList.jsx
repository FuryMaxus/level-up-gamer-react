import React, { useState } from 'react'
import Button from '../atoms/Button';
import { useCart } from '../../context/CartContext';

export default function CartList(props) {
  
  const {checkedItems,setCheckedItems} = props;
  
  const {removeFromCart, cartProducts, increaseQuantity,decreaseQuantity} = useCart();

  const handleChangeOnCheck = (item) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const handleSelectAll = (checked) => {
  if (checked) {
    const allChecked = {};
    cartProducts.forEach((p) => {
      allChecked[p.id] = true;
    });
    setCheckedItems(allChecked);
  } else {
    setCheckedItems({});
  }
};

const handleDeleteWithChecks = (id) => {
  removeFromCart(id);
  setCheckedItems((prev) => {
    const copy = { ...prev };
    delete copy[id];
    return copy;
  });
};

  return (
    <section id="cart-products-container" className='cart-section'>
      <h1>Carro</h1>
      <div id="checkbox-select-all-container">
        <input 
          type="checkbox" 
          id="cart-check-all" 
          checked={
            Object.keys(checkedItems).length === cartProducts.length && cartProducts.length > 0
          }
          
          onChange={(e) => handleSelectAll(e.target.checked)}
        />
        <label htmlFor="">Seleccionar todos</label>
      </div>
      <hr/>
      {cartProducts.map(p => (
          <React.Fragment key={p.id}>
            <div className="cart-product">
              <div>
                <input 
                  type="checkbox" 
                  checked={!!checkedItems[p.id]} 
                  onChange={() => handleChangeOnCheck(p.id)}
                />
              </div>
              <img 
                src={p.imgUrl} 
                alt={p.name}
              />
              <div>
                <h3>{p.name}</h3>
                <p>{p.brand}</p>
              </div>
              <div className='price-and-quantity-container'>
                <div className='price-unit-container'>
                  {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(p.price)}
                  <p>X</p>
                  {p.quantity}
                </div>
                <div className='quantity-buttons-container'>
                  <Button className = "increase-quantity" text = '+' onClick = {() => increaseQuantity(p.id)}/>
                  <Button className = "decrease-quantity" text = '-' onClick = {() => decreaseQuantity(p.id)}/>
                </div>
              </div>
              
              
              <Button text="Eliminar" onClick={() => handleDeleteWithChecks(p.id)} />
            </div>
            <hr/>
          </React.Fragment>
          
        ))}
    </section>
  )
}
