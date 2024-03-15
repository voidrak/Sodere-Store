import { ProductContext } from "@/contexts/ProductContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const ProductDetail = () => {
  const { productData } = useContext(ProductContext);
  const { productId } = useParams();
  const selectedProduct = productData.filter((item) => {
    return item.id === productId;
  });
  return (
    <div className="mb-48">
      {/* ///////////////////////// */}

      <div className="bg-[url('/category-bg.jpeg')] py-10 text-center">
        <h1 className="text-pretty text-[25px]  font-bold md:text-[32px]  ">
          {selectedProduct[0].itemNameEnglish}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-x-1 px-3  min-[360px]:gap-x-2">
          <Link to="/" className="flex items-center  gap-x-2">
            <FaHome />
            <p className="">Home</p>
          </Link>
          <TbMathGreater size={13} />
          <p className="line-clamp-1 text-[15px]">
            {selectedProduct[0].itemNameEnglish}
          </p>
        </div>
      </div>

      {/* //////////////////////// */}

      <div className="bg-red -400 mx-auto mt-16 max-w-[510px] px-4 md:max-w-[690px] lg:max-w-[930px] min-[1200px]:max-w-[1170px]  ">
        {/* ////////////////////// */}

        <div className="md:grid md:grid-cols-2">
          <div className="mb-8 w-[100%] ">
            <img src={selectedProduct[0].imgSrc} alt="" className="mx-auto" />
          </div>
          <div className="">
            <div className="mt-2 space-y-1">
              <h1 className="text-pretty text-2xl font-semibold ">
                {selectedProduct[0].itemNameEnglish}
              </h1>
              <h1 className="text-pretty text-2xl font-semibold ">
                {selectedProduct[0].itemNameAmharic}
              </h1>
            </div>

            <div className="mt-4 flex items-center justify-between ">
              <p className="text-[18px] font-semibold">
                ${selectedProduct[0].price}
              </p>
              <h1 className="font-bold text-green-500"> In Stock</h1>
            </div>
            <p className="mt-8 text-[15px] text-gray-500 ">
              Discover convenience and comfort in every use, making it a
              must-have for any lifestyle. Whether you're sipping, wearing, or
              utilizing, this product is sure to become a trusted companion in
              your day-to-day activities. Embrace quality, embrace functionality
              – embrace the perfect addition to your life
            </p>

            <div className="mt-16 flex items-center gap-x-4">
              <input
                type="number"
                placeholder="enter quantity"
                className=" w-[140px] rounded-full border border-gray-400 py-2 text-center font-bold  outline-none"
              />
              <div className="rounded-full border border-gray-400 p-2">
                <FiShoppingBag size={25} />
              </div>
              <div className="rounded-full border border-gray-400 p-2">
                <FaRegHeart size={25} />
              </div>
            </div>
          </div>
        </div>

        {/* /////////////////////// */}
      </div>
    </div>
  );
};

export default ProductDetail;
