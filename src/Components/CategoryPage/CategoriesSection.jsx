import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { TbMathGreater } from "react-icons/tb";
import Pagination from "../Pagination";
import CategoryFilter from "./CategoryFilter";
import CategoryProductList from "./CategoryProductList";

const CategoriesSection = () => {
  const { productData, categories, setCurrentCategory, currentCategory } =
    useContext(ProductContext);
  const [categoryMainList, setCategoryMainList] = useState(productData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [sortOptionValue, SetSortOptionValue] = useState("");

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryMainList]);

  return (
    <div className="">
      <div className="">
        <div className="bg-[url('/category-bg.jpeg')] py-10 text-center">
          <h1 className="text-[34px] font-bold md:text-[44px] lg:text-[49px] min-[1200px]:text-[55px]">
            {currentCategory}
          </h1>
          <div className="flex items-center justify-center gap-x-2 ">
            <p className="">
              <Link to="/">Home</Link>
            </p>
            <TbMathGreater size={13} />
            <p className="font-bold">{currentCategory}</p>
          </div>
        </div>
        <CategoryFilter
          SetSortOptionValue={SetSortOptionValue}
          sortOptionValue={sortOptionValue}
        />
        <CategoryProductList
          postPerPage={postPerPage}
          currentPage={currentPage}
          categoryMainList={categoryMainList}
          setCategoryMainList={setCategoryMainList}
          sortOptionValue={sortOptionValue}
        />
        <Pagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          postPerPage={postPerPage}
          setPostPerPage={setPostPerPage}
          totalPost={categoryMainList.length}
        />
      </div>
    </div>
  );
};

export default CategoriesSection;
