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
    } else {
      setCategoryMainList(productData);
    }
  }, [currentCategory]);
  const mappedCategoryList = categoryMainList.map((product) => (
    <div className="r grid w-[40vw] border border-slate-200" key={product.id}>
      <div className=" relative flex h-[65vw]  items-center   shadow-sm after:absolute after:top-0 after:h-[0%]  after:w-[100%] after:bg-gray-950 after:opacity-75  after:transition-all after:duration-500 after:ease-in-out hover:after:h-[100%] ">
        <img src={product.imgSrc} alt="" className=" w-[100%]" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="mt-2 text-center font-semibold">
          {product.itemNameEnglish}
        </h1>
        <p className="mb-2">${product.price}</p>
      </div>
    </div>
  ));
  return (
    <div className="mt-8 grid grid-cols-2 place-items-center gap-y-4">
      {mappedCategoryList}
    </div>
  );
};

export default CategoryProductList;
