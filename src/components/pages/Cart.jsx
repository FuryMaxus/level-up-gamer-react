import React, { useState } from 'react'
import '../../styles/Cart.css'
import CartList from '../organisms/CartList'
import CartSummary from '../organisms/CartSummary'
import { useCart } from '../../context/CartContext';

export default function Cart() {

  const { cartProducts } = useCart();

  const initialChecked = {};
  cartProducts.forEach(p => {
    initialChecked[p.id] = true;
  });

  const [checkedItems, setCheckedItems] = useState(initialChecked);
  

  return (
      <main id='cart-main'>
        <CartList 
          checkedItems = {checkedItems} 
          setCheckedItems = {setCheckedItems}
          />
        <CartSummary 
          checkedItems = {checkedItems}
        />
      </main>
  )
}
