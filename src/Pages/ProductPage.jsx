import React, { useContext } from "react";
import ProductDetail from "@/Components/ProductPage/ProductDetail";
import ProductDesc from "@/Components/ProductPage/ProductDesc";

const ProductPage = () => {
  return (
    <div>
      <ProductDetail />
      <ProductDesc />
    </div>
  );
};

export default ProductPage;
