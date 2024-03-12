import React, { createContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const WishListContext = createContext();

export const WishListContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const handleWishlist = (product) => {
    const ExistingItemIndex = wishlist.findIndex(
      (item) => item.id === product.id,
    );
    setWishlist((prev) => {
      if (ExistingItemIndex !== -1) {
        const updatedWishList = wishlist.filter(
          (item) => item.id !== product.id,
        );
        toast.error("Item  removed from wishlist!");

        return updatedWishList;
      } else {
        toast.success("Item added to wishlist");
        return [...prev, product];
      }
    });
  };

  //   const removeWishlistItem = (id) => {
  //     const updatedWishList = wishlist.filter((item) => item.id !== id);
  //     setWishlist(updatedWishList);
  //   };

  return (
    <WishListContext.Provider
      value={{
        wishlist,
        setWishlist,
        handleWishlist,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};
