import React, { useContext, useMemo, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { ProductContext } from "@/contexts/ProductContext";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";
import { SearchContext } from "@/contexts/SearchContext";

const SearchSection = ({ setIsSearch, isSearch }) => {
  const [loadedProducts, setLoadedProducts] = useState(0);
  const { productData } = useContext(ProductContext);
  const { searchInput, setSearchInput, setSearchData } =
    useContext(SearchContext);

  const handleProductLoad = () => {
    setLoadedProducts((prevCount) => prevCount + 1);
  };

  const searchResult = useMemo(() => {
    if (searchInput) {
      return productData.filter((product) => {
        return product.itemNameEnglish
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
    }
  }, [searchInput]);

  const mappedSearch =
    searchResult &&
    searchResult
      .sort((a, b) => {
        return b.price - a.price;
      })
      .map((product, index) => {
        if (index < 6) {
          return (
            <ProductCard
              product={{ ...product, itemNameAmharic: "" }}
              key={index}
              onLoad={handleProductLoad}
            />
          );
        } else {
          return null;
        }
      });

  return (
    <div
      className={` absolute left-0 top-0  z-[9999] flex min-h-[calc(100vh-56px)]  w-[100%] flex-col items-center bg-white py-5 transition-all duration-500 ease-in-out  ${isSearch ? " " : "h-0 translate-y-[-110vh]  "}`}
    >
      <div className="ml-[calc(100%-50px)]">
        <IoCloseSharp
          size={30}
          onClick={() => {
            setIsSearch(false);
          }}
        />
      </div>
      <h1 className="mt-4 w-[85%] text-center text-[29px] font-semibold md:text-[31px] lg:text-[34px] xl:text-[38px]">
        What are you looking for ?
      </h1>
      <div className="relative lg:mt-[15px]">
        <input
          className="text-x mt-4 block w-[90vw] rounded-full border border-black px-[38px]  py-[10px] shadow-sm placeholder:text-lg placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:py-[15px] sm:text-sm md:w-[60vw] min-[1200px]:w-[45vw] "
          placeholder="Search for anything..."
          value={searchInput}
          type="text"
          name="search"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <CiSearch className="absolute right-[25px] top-[30px]" size={20} />
      </div>
      <div className="mt-16 flex   flex-col  items-center   min-[375px]:max-w-[90%] min-[481px]:max-w-[471px] sm:min-w-[540px] md:min-w-[80%]   ">
        {mappedSearch && mappedSearch.length > 1 ? (
          <>
            <div className="    grid  grid-cols-2 last:hidden  md:grid-cols-3 lg:grid-cols-4 min-[1200px]:grid-cols-5 2xl:grid-cols-6">
              {mappedSearch.map((item, index) => (
                <div
                  // className={`  ${index > 2 ? " hidden" : index === 2 ? " md:block" : index === 3 ? "  lg:block" : index === 4 ? "min-[1200px]:block" : index === 5 ? "2xl:block" : ""}`}
                  className={`   block  ${index === 5 ? " hidden 2xl:block" : index === 4 ? " hidden min-[1200px]:block" : index === 3 ? " hidden  lg:block" : index === 2 ? " hidden md:block" : ""}`}
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
            <Link to="search">
              <button
                type="button"
                onClick={() => {
                  setIsSearch(false);
                  setSearchData(searchResult);
                }}
                className=" mb-2 me-2 mt-8 rounded-lg border     border-gray-600 bg-gray-800 px-5 py-2.5     text-sm font-medium text-gray-400   transition-all duration-150 ease-in-out hover:z-10 hover:bg-gray-700  hover:text-white hover:outline-none hover:ring-4 hover:ring-gray-700"
              >
                Load More
              </button>
            </Link>
          </>
        ) : (
          <div className="m-auto text-center">
            <h1 className=" font-bold ">No result found </h1>
            <p className="text-[15px] font-extralight">try to search </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchSection;
