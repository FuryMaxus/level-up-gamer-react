import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import '../../styles/Cart.css'
import CartList from '../organisms/CartList'
import CartSummary from '../organisms/CartSummary'
export default function Cart() {
  return (
    <>
      <Header/>
      <main>
        <CartList/>
        <CartSummary/>
      </main>
      <Footer/>
    </>
  )
}
