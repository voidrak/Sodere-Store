import { ProductContext } from "@/contexts/ProductContext";
import React, { useContext, useEffect, useState } from "react";

const CategoryProductList = () => {
  const { productData, currentCategory } = useContext(ProductContext);
  const [categoryMainList, setCategoryMainList] = useState(productData);
  useEffect(() => {
    if (currentCategory != "ALL") {
      const filteredList = productData.filter((val) =>
        val.category.includes(currentCategory),
      );
      setCategoryMainList(filteredList);
      console.log(currentCategory);
      console.log(categoryMainList);
    }
  }, [currentCategory]);
  const mappedCategoryList = categoryMainList.map((product) => (
    <div className="" key={product.id}>
      <img src={product.imgSrc} alt="" className="w-[150px]" />
      <h1 className="">{product.itemNameEnglish}</h1>
      <p className="">${product.price}</p>
    </div>
  ));
  return <div className="grid grid-cols-2">{mappedCategoryList}</div>;
};

export default CategoryProductList;
