import React, { useState } from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import '../../styles/Cart.css'
import CartList from '../organisms/CartList'
import CartSummary from '../organisms/CartSummary'
export default function Cart(props) {

  const {cartProducts, setCartProducts} = props;

  const initialChecked = {};
  cartProducts.forEach(p => {
    initialChecked[p.id] = true;
  });

  const [checkedItems, setCheckedItems] = useState(initialChecked);
  

  return (
      <main>
        <CartList 
          cartProducts = {cartProducts} 
          setCartProducts={setCartProducts} 
          checkedItems = {checkedItems} 
          setCheckedItems = {setCheckedItems}
          />
        <CartSummary cartProducts = {cartProducts}/>
      </main>
  )
}
