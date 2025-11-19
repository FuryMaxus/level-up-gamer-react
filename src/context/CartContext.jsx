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
    const existingProduct = cartProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      const updatedProducts = cartProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setCartProducts(updatedProducts);
    } else {
      const newProduct = { ...product, quantity: 1 };
      setCartProducts([...cartProducts, newProduct]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCartProducts = cartProducts.filter((p) => p.id !== id);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
    setCartProducts(updatedCartProducts);
  };

  const increaseQuantity = (id) => {
    const updated = cartProducts.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    );
    setCartProducts(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cartProducts
      .map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      )
      .filter((p) => p.quantity > 0); 
    setCartProducts(updated);
  };
  
  const totalQuantity = cartProducts.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return(
    <CartContext.Provider value={{cartProducts,addToCart,removeFromCart,totalQuantity,increaseQuantity,decreaseQuantity}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);