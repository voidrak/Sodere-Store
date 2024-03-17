import React, { useEffect } from "react";
import ProductCard from "../ProductCard";

const SimilarProduct = ({ selectedProduct, productData }) => {
  const filterProduct = productData
    .filter((product) => {
      return product.category[0] === selectedProduct[0].category[0];
    })
    .filter((product) => product.id != selectedProduct[0].id)
    .sort((a, b) => {
      return b.price - a.price;
    });

  const mappedSimilarProduct = filterProduct.map((product, index) => {
    if (index < 4) {
      return <ProductCard key={index} product={product} />;
    } else {
      return null; // or any other default value
    }
  });
  return (
    <div className="mt-24 ">
      <h1 className="mb-8 text-center text-[28px]  font-bold text-[#2178ac] min-[450px]:text-[30px] sm:text-[35px] lg:text-[38px] xl:text-[40px] 2xl:text-[45px] ">
        Similar Products
      </h1>
      <div className="mx-auto  grid max-w-[1280px] grid-cols-2 place-items-center gap-y-4 px-2  min-[481px]:px-4 min-[576px]:px-6 sm:w-[90%] sm:px-8 md:grid-cols-4 min-[931px]:max-w-[837px] min-[1200px]:max-w-[1024px] min-[1200px]:grid-cols-4 min-[1500px]:max-w-[1240px] ">
        {mappedSimilarProduct}
      </div>
    </div>
  );
};

export default SimilarProduct;
