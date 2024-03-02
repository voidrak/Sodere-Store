import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const CategoriesPage = () => {
  const { productData } = useContext(ProductContext);

  const categories = [...new Set(productData.map((val) => val.category[0]))];

  const filtered = productData.filter((item) => {
    return item.category.includes("Accessories");
  });

  // console.log(filtered);

  const mappedData = filtered.map((item, index) => (
    <div className="border-red-30 w-[200px] border" key={index}>
      <img src={item.imgSrc} alt="" />
    </div>
  ));

  return (
    <>
      <div className="mx-auto flex flex-wrap gap-4">
        {categories.map((val, index) => (
          <div className="mx-8 bg-yellow-200 " key={index}>
            {val}
          </div>
        ))}
      </div>
      <div className=" grid grid-cols-5 gap-y-8 bg-red-200 ">{mappedData}</div>
    </>
  );
};

export default CategoriesPage;
