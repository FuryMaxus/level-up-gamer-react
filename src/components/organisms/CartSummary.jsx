import React from 'react'
import Button from '../atoms/Button';
import { useCart } from '../../context/CartContext';

export default function CartSummary(props) {

  const {checkedItems} = props;
  const { cartProducts } = useCart();
  const productQuantity = cartProducts.length;
  

  const totalPrice = cartProducts
    .filter((p) => checkedItems[p.id])
    .reduce((accumulator, cartProduct) => {
      return accumulator + cartProduct.price;
    },0);
  
  const discounts = 0;

  const finalPrice = totalPrice - discounts;
  return (
    <section id="cart-total-payment-container" className='cart-section'>
      <h1>Resumen de Compra</h1>
      <div>
        <p>Productos({productQuantity})</p>
        <p>{
          new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(totalPrice)}
        </p>
      </div>
      <hr />
      <div>
        <p>Descuentos(0)</p>
        <p>
          {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(discounts)}
        </p>
      </div>
      <hr />
      <div>
        <p>Total:</p>
        <p>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(finalPrice)}</p>
      </div>
      <Button text = 'Continuar Compra' />
    </section>
  )
}
