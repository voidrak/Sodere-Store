import { WishListContext } from "@/contexts/WishListContext";
import React, { useContext, useState } from "react";
import ProductCard from "../ProductCard";

const WishlistProducts = () => {
  const { wishlist, setWishlist, addToWishList, removeWishlistItem } =
    useContext(WishListContext);
  const [loadedProducts, setLoadedProducts] = useState(0);

  const handleProductLoad = () => {
    setLoadedProducts((prevCount) => prevCount + 1);
  };
  const mappedCategoryList =
    wishlist &&
    wishlist.map((product, index) => (
      <ProductCard product={product} key={index} onLoad={handleProductLoad} />
    ));
  return (
    <div className="">
      {wishlist.length >= 1 ? (
        <div className="mx-auto mt-8 grid max-w-[1280px] grid-cols-2 place-items-center gap-y-4 px-2  min-[481px]:px-4 min-[576px]:px-6 sm:w-[90%] sm:px-8 md:grid-cols-3 min-[931px]:max-w-[837px] min-[1200px]:max-w-[1024px] min-[1200px]:grid-cols-4 min-[1500px]:max-w-[1240px]">
          {mappedCategoryList}
        </div>
      ) : (
        <div className="justify-centerspace-y-10 flex h-[] flex-col items-center ">
          <img src="/empty_cart.jpg" className="w-[425px]" alt="" />
          <h1 className=" mt-4 w-[85%] text-center text-[29px] font-semibold md:text-[31px] lg:text-[34px] xl:text-[38px]">
            Your wishlist is empty.
          </h1>
          <p className="font-semibold">Start adding some favorites!</p>
        </div>
      )}
    </div>
  );
};

export default WishlistProducts;
