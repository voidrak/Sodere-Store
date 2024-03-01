import React, { children, createContext, useState } from "react";
import ProductsData from "../data/ProductData";
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState(ProductsData);

  return (
    <ProductContext.Provider value={{ productData }}>
      {children}
    </ProductContext.Provider>
  );
};
