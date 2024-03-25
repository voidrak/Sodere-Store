import React, { useContext } from "react";
import ProductDetail from "@/Components/ProductPage/ProductDetail";
import ProductDesc from "@/Components/ProductPage/ProductDesc";
import ScrollToTop from "@/Components/ScrollToTop";
const ProductPage = () => {
  return (
    <div>
      <ProductDetail />
      <ScrollToTop />
    </div>
  );
};

export default ProductPage;
