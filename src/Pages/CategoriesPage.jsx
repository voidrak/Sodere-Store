import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const CategoriesPage = () => {
  const { productData } = useContext(ProductContext);

  const filtered = productData.filter((item) => {
    return item.category.includes("Bo ");
  });
  console.log(filtered);
  const mappedData = productData.map((item, index) => (
    <div className="border-red-30 w-[200px] border" key={index}>
      <h1>{item.itemNameAmharic}</h1>
    </div>
  ));

  return (
    <div className=" grid grid-cols-5 gap-y-8 bg-slate-200 ">{mappedData}</div>
  );
};

export default CategoriesPage;
