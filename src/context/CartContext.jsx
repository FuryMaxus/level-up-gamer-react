import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {

  const [cartProducts, setCartProducts] = useState(
      JSON.parse(localStorage.getItem("cartProducts")) || []
    );

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  const addToCart = (product) => {
    const updatedProducts = [...cartProducts, product];

    setCartProducts(updatedProducts);

    localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
  };

  const removeFromCart = (id) => {
    const updatedCartProducts = cartProducts.filter((p) => p.id !== id);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
    setCartProducts(updatedCartProducts);
  };

  return(
    <CartContext.Provider value={{cartProducts,addToCart,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);