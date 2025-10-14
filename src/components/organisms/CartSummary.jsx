import React from 'react'

export default function CartSummary(props) {
  const {cartProducts} = props;
  const productQuantity = cartProducts.length;
  const totalPrice = cartProducts.reduce((accumulator, cartProduct) => {
    return accumulator + cartProduct.price;
  },0);
  const discounts = 0;
  return (
    <section id="cart-total-payment-container">
      <h1>Resumen de Compra</h1>
      <div>
        <p>Productos({productQuantity})</p>
        <p>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(totalPrice)}</p>
      </div>
      <hr />
      <div>
        <p>Descuentos(0)</p>
        <p>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(discounts)}</p>
      </div>
      <hr />
      <div>
        <p>Total:</p>
        <p>{new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(totalPrice - discounts)}</p>
      </div>
      <button>Continuar Compra</button>
    </section>
  )
}
