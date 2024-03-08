import React, { createContext, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItemsList, setCartItemsList] = useState([]);

  const addToCart = (item) => {
    setCartItemsList((prev) => {
      [...prev, item];
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItemsList, setCartItemsList, addToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
