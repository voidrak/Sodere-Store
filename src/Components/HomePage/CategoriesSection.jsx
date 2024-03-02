import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { TbMathGreater } from "react-icons/tb";
import { ComboboxDemo } from "../ui/combobox";

const CategoriesSection = () => {
  const { productData, categories, setCurrentCategory, currentCategory } =
    useContext(ProductContext);
  const [categoryList, setCategoryList] = useState(productData);

  useEffect(() => {
    if (currentCategory != "all") {
      const filteredCategoryList = productData.filter((val) => {
        return val.category[0] === currentCategory;
      });
      setCategoryList(filteredCategoryList);
    }
  }, [currentCategory]);

  const mappedCategory = categoryList.map((item) => (
    <h1 key={item.id}>{item.itemNameEnglish}</h1>
  ));

  return (
    <div className="">
      <div className="">
        <div className="bg-[url('/category-bg.jpeg')] py-10 text-center">
          <h1 className="text-[34px] font-bold md:text-[44px] lg:text-[49px] min-[1200px]:text-[55px]">
            {currentCategory}
          </h1>
          <div className="flex items-center justify-center gap-x-2 ">
            <p className="">
              {" "}
              <Link to="/">Home</Link>
            </p>
            <TbMathGreater size={13} />
            <p className="font-bold">{currentCategory}</p>
          </div>
        </div>
        <ComboboxDemo />
      </div>
    </div>
  );
};

export default CategoriesSection;
