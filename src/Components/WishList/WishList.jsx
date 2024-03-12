import React from "react";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";
import WishlistProducts from "./WishlistProducts";

const WishList = () => {
  return (
    <div className="">
      <div className="  py-10 text-center">
        <h1 className="text-[34px] font-bold md:text-[44px] lg:text-[49px] min-[1200px]:text-[55px]">
          Wishlist
        </h1>
        <div className="flex items-center justify-center gap-x-2 ">
          <p className="">
            <Link to="/">Home</Link>
          </p>
          <TbMathGreater size={13} />
          <p className="">Wishlist</p>
        </div>
      </div>
      <WishlistProducts />
    </div>
  );
};

export default WishList;
