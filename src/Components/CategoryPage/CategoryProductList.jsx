import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "@/contexts/ProductContext";

import { IoEyeOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

const CategoryProductList = ({
  postPerPage,
  currentPage,
  categoryMainList,
  setCategoryMainList,
  sortOptionValue,
}) => {
  const { productData, currentCategory } = useContext(ProductContext);
  const [sortedList, setSortedList] = useState(categoryMainList);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  useEffect(() => {
    if (currentCategory != "ALL") {
      const filteredList = productData.filter((val) =>
        val.category.includes(currentCategory),
      );

      setCategoryMainList(filteredList);
    } else {
      setCategoryMainList(productData);
    }
  }, [currentCategory, productData]);

  useEffect(() => {
    setSortedList(categoryMainList);
  }, [categoryMainList]);

  useEffect(() => {
    switch (sortOptionValue) {
      case "default":
        {
          setSortedList(categoryMainList);
        }
        break;
      case "AZ":
        {
          const sortedCategory = [...categoryMainList].sort((a, b) =>
            a.itemNameEnglish.localeCompare(b.itemNameEnglish),
          );
          setSortedList(sortedCategory);
        }
        break;
      case "ZA":
        {
          const sortedCategory = [...categoryMainList].sort((a, b) =>
            b.itemNameEnglish.localeCompare(a.itemNameEnglish),
          );
          setSortedList(sortedCategory);
        }
        break;
      case "toHigh":
        {
          const sortedCategory = [...categoryMainList].sort(
            (a, b) => a.price - b.price,
          );
          setSortedList(sortedCategory);
        }
        break;
      case "toLow":
        {
          const sortedCategory = [...categoryMainList].sort(
            (a, b) => b.price - a.price,
          );
          setSortedList(sortedCategory);
        }
        break;
      default:
        setSortedList(categoryMainList);
    }
  }, [sortOptionValue, currentCategory]);

  const mappedCategoryList = sortedList
    .slice(firstPostIndex, lastPostIndex)
    .map((product) => (
      <div
        className="  group grid w-[90%] cursor-pointer overflow-hidden border border-slate-200"
        key={product.id}
      >
        <div className=" bg-re-300  relative  flex h-[60vw] max-h-[400px] items-center    shadow-sm after:absolute after:top-0 after:h-[0%]  after:w-[100%] after:bg-gray-950 after:opacity-75  after:transition-all after:duration-500 after:ease-in-out group-hover:after:h-[100%] md:h-[40vw] ">
          <img src={product.imgSrc} alt="" className=" w-[100%]" />
          <div className="absolute top-1 z-10 ml-[-100px] flex w-[0%] flex-col  gap-y-2 transition-all duration-500 ease-in-out group-hover:ml-[0px] group-hover:w-[70%] ">
            <button className="text  md:text-[10px flex items-center gap-x-1 rounded-e-sm  border border-none bg-[#5a9bc1]  p-2 text-[12px] text-white outline-none lg:p-3">
              <FiShoppingBag color="white" size={15} className="" />
              <p>Cart</p>
            </button>
            <button className="text  md:text-[10px flex items-center gap-x-1 rounded-e-sm  border border-none bg-[#c15a5a] p-2 text-[12px] text-white outline-none  lg:p-3">
              <FaRegHeart color="white" size={15} className="" />
              <p>Wish List</p>
            </button>
            <button className="text  md:text-[10px flex items-center gap-x-1 rounded-e-sm  border border-none bg-slate-300 p-2 text-[12px] font-bold outline-none lg:p-3">
              <IoEyeOutline color="black" size={15} className="" />
              <p>View Item</p>
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center transition-all duration-300 ease-in-out  ">
          <div className="">
            {" "}
            <h1 className="mt-2 text-center font-semibold">
              {product.itemNameEnglish}
            </h1>
            <h1 className="mt-2 text-center font-semibold">
              {product.itemNameAmharic}
            </h1>
          </div>
          <p className="mb-2">${product.price}</p>
        </div>
      </div>
    ));
  return (
    <div className="mx-auto mt-8 grid max-w-[1280px] grid-cols-2 place-items-center gap-y-4 px-2  min-[481px]:px-4 min-[576px]:px-6 sm:w-[90%] sm:px-8 md:grid-cols-3 min-[931px]:max-w-[837px] min-[1200px]:max-w-[1024px] min-[1200px]:grid-cols-4 min-[1500px]:max-w-[1240px]">
      {mappedCategoryList}
    </div>
  );
};

export default CategoryProductList;
