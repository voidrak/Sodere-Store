import { SearchContext } from "@/contexts/SearchContext";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";
import ProductCard from "../ProductCard";
const SearchPageSection = () => {
  const { searchData, searchInput } = useContext(SearchContext);
  const [loadedProducts, setLoadedProducts] = useState(0);

  const handleProductLoad = () => {
    setLoadedProducts((prevCount) => prevCount + 1);
  };
  const mappedSearchResult =
    searchData &&
    searchData.map((product, index) => (
      <ProductCard product={product} key={index} onLoad={handleProductLoad} />
    ));
  return (
    <div className=" px-3">
      <div className="mt-8 ">
        <h1 className="text-center text-[27px] font-bold md:text-[30px] lg:text-[37px] min-[1200px]:text-[45px]  ">
          {searchData.length} results found for "{searchInput}"
        </h1>
        <div className="mt-3 flex items-center justify-center gap-x-2 ">
          <Link to="/" className="flex items-center  gap-x-2">
            <FaHome />
            <p className="">Home</p>
          </Link>
          <TbMathGreater size={13} />
          <p className="">Search Result</p>
        </div>
      </div>
      <div className="mx-auto mt-8 grid max-w-[1280px] grid-cols-2 place-items-center gap-y-4 px-2  min-[481px]:px-4 min-[576px]:px-6 sm:w-[90%] sm:px-8 md:grid-cols-3 min-[931px]:max-w-[837px] min-[1200px]:max-w-[1024px] min-[1200px]:grid-cols-4 min-[1500px]:max-w-[1240px]">
        {mappedSearchResult}
      </div>
    </div>
  );
};

export default SearchPageSection;
