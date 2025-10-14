import React, { useState } from 'react'
import Button from '../atoms/Button';

export default function CartList(props) {
  
  const {checkedItems,setCheckedItems,cartProducts, setCartProducts} = props;
 
  

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

const handleDelete = (id) => {

  const updatedCartProducts = cartProducts.filter((p) => p.id !== id);
  localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
  setCartProducts(updatedCartProducts);
  setCheckedItems((prev) => {
    const copy = { ...prev };
    delete copy[id];
    return copy;
  });
};

  return (
    <section id="cart-products-container">
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
          <div className="cart-product" key={p.id} >
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
            <div> 
              {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(p.price)}
            </div>
            <Button text="Eliminar" onClick={() => handleDelete(p.id)} />
        </div>
        ))}
    </section>
  )
}
