import React, { useEffect } from "react";
import ProductCard from "../ProductCard";

const SimilarProduct = ({ selectedProduct, productData }) => {
  const filterProduct = productData
    .filter((product) => {
      return product.category[0] === selectedProduct[0].category[0];
    })
    .sort((a, b) => {
      return a.price - b.price;
    });

  const mappedSimilarProduct = filterProduct.map((product, index) => {
    while (index <= 4) {
      <ProductCard product={product} />;
    }
  });
  return (
    <div className="mt-24 ">
      <h1 className="mb-8 text-center text-[28px]  font-bold text-[#2178ac] min-[450px]:text-[30px] sm:text-[35px] lg:text-[38px] xl:text-[40px] 2xl:text-[45px] ">
        Similar Products
      </h1>
      <div className="grid ">{mappedSimilarProduct}</div>
    </div>
  );
};

export default SimilarProduct;
