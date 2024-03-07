import React, { useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

import SkeletonCard from "./SkeletonCard";

const ProductCard = ({ product }) => {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 3000);
  }, []);

  // const handleOnLoad = () => {};
  return (
    <>
      {isLoad ? (
        <div className="  group mx-auto grid w-[90%] cursor-pointer overflow-hidden border border-slate-200">
          <div className=" bg-re-300  relative  flex h-[60vw] max-h-[400px] items-center    shadow-sm after:absolute after:top-0 after:h-[0%]  after:w-[100%] after:bg-gray-950 after:opacity-75  after:transition-all after:duration-500 after:ease-in-out group-hover:after:h-[100%] md:h-[40vw]  ">
            <img
              src={product.imgSrc}
              onLoad={() => {
                // setIsLoad(true);
                console.log("object");
              }}
              alt=""
              className=" w-[100%]"
            />
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
              <h1 className="mt-2 text-center font-semibold">
                {product.itemNameEnglish}
              </h1>
            </div>
            <p className="mb-2">${product.price}</p>
          </div>
        </div>
      ) : (
        <SkeletonCard />
      )}
    </>
  );
};

export default ProductCard;
