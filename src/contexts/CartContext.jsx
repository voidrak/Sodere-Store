import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = (product) => {
    const ExistingItemIndex = cartItemsList.findIndex(
      (item) => item.id === product.id,
    );
    setCartItemsList((prev) => {
      if (ExistingItemIndex !== -1) {
        const updatedCartList = [...prev];
        updatedCartList[ExistingItemIndex] = {
          ...updatedCartList[ExistingItemIndex],
          cartAmount: updatedCartList[ExistingItemIndex].cartAmount + 1,
        };
        return updatedCartList;
      } else {
        return [...prev, { ...product, cartAmount: 1 }];
      }
    });
  };

  const removeCartItem = (id) => {
    const updatedCartList = cartItemsList.filter((item) => item.id !== id);
    setCartItemsList(updatedCartList);
  };

  const increaseItemAmount = (id) => {
    const cartItemIndex = cartItemsList.findIndex((item) => item.id === id);
    setCartItemsList((prev) => {
      const updatedCartList = [...prev];
      updatedCartList[cartItemIndex] = {
        ...updatedCartList[cartItemIndex],
        cartAmount: updatedCartList[cartItemIndex].cartAmount + 1,
      };
      return updatedCartList;
    });
  };

  const decreaseItemAmount = (id) => {
    const cartItemIndex = cartItemsList.findIndex((item) => item.id === id);
    setCartItemsList((prev) => {
      const updatedCartList = [...prev];
      if (updatedCartList[cartItemIndex].cartAmount === 1) {
        const updatedCartList = cartItemsList.filter((item) => item.id !== id);
        return updatedCartList;
      }
      updatedCartList[cartItemIndex] = {
        ...updatedCartList[cartItemIndex],
        cartAmount: updatedCartList[cartItemIndex].cartAmount - 1,
      };
      return updatedCartList;
    });
  };

  useEffect(() => {
    let totalBalance = 0;
    cartItemsList.forEach((item) => {
      totalBalance += item.price * item.cartAmount;
    });
    setSubtotal(totalBalance);
  }, [cartItemsList, subtotal]);

  // useEffect(() => {
  //   console.log("subtotal");
  //   console.log(subtotal);
  // }, [cartItemsList]);

  return (
    <CartContext.Provider
      value={{
        cartItemsList,
        setCartItemsList,
        addToCart,
        removeCartItem,
        increaseItemAmount,
        decreaseItemAmount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
