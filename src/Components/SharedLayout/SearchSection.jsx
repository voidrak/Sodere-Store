import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const SearchSection = ({ setIsSearch, isSearch }) => {
  return (
    <div
      className={` left-0 top-0    h-[calc(100vh-56px)] w-[100%] flex-col items-center bg-white py-5 transition-all duration-500 ease-in-out  ${isSearch ? "absolute flex" : "mt-[-90vh] "}`}
    >
      <div className="ml-[calc(100%-50px)]">
        <IoCloseSharp
          size={30}
          onClick={() => {
            setIsSearch(false);
          }}
        />
      </div>
      <h1 className="mt-4 w-[85%] text-center text-[29px] font-semibold">
        What are you looking for ?
      </h1>
      <div className="relative">
        <input
          className="mt-4 block w-[90vw] rounded-full border border-black px-[38px]  py-[10px] shadow-sm placeholder:text-lg placeholder:italic placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
        <CiSearch className="absolute right-[25px] top-[30px]" size={20} />
      </div>
    </div>
  );
};

export default SearchSection;
