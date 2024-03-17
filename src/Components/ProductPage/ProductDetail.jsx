import { ProductContext } from "@/contexts/ProductContext";
import React, { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CartContext } from "@/contexts/CartContext";
import { WishListContext } from "@/contexts/WishListContext";
import SimilarProduct from "./SimilarProduct";

const ProductDetail = () => {
  const [isWished, setIsWished] = useState(false);
  const [cartAmount, setCartAmount] = useState(1);

  const { addItemWithAmount } = useContext(CartContext);
  const { handleWishlist } = useContext(WishListContext);
  const { productData } = useContext(ProductContext);

  const { productId } = useParams();
  const inputElement = useRef(null);
  //   //////////////////////////////////////////////////////////////////

  const selectedProduct = productData.filter((item) => {
    return item.id === productId;
  });

  console.log(productId);

  const mappedSelectedProduct = selectedProduct.map((product) => (
    <div key={product.id}>
      {/* ///////////////////////// */}

      <div className="bg-[url('/category-bg.jpeg')] py-10 text-center">
        <h1 className="text-pretty text-[25px]  font-bold md:text-[32px]  ">
          {product.itemNameEnglish}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-x-1 px-3  min-[360px]:gap-x-2">
          <Link to="/" className="flex items-center  gap-x-2">
            <FaHome />
            <p className="">Home</p>
          </Link>
          <TbMathGreater size={13} />
          <p className="line-clamp-1 text-[15px]">{product.itemNameEnglish}</p>
        </div>
      </div>

      {/* //////////////////////// */}

      <div className="bg-red -400 mx-auto mt-16 max-w-[510px] px-4 md:mt-[8rem] md:max-w-[690px] lg:max-w-[930px] min-[1200px]:max-w-[1170px]  ">
        {/* ////////////////////// */}

        <div className="gap-x-8 md:grid md:grid-cols-2">
          <div className="mb-8 w-[100%] ">
            <img src={product.imgSrc} alt="" className="mx-auto" />
          </div>
          <div className="">
            <div className="mt-2 space-y-1">
              <h1 className="text-pretty text-2xl font-semibold ">
                {product.itemNameEnglish}
              </h1>
              <h1 className="text-pretty text-2xl font-semibold ">
                {product.itemNameAmharic}
              </h1>
            </div>

            <div className="mt-4 flex items-center justify-between ">
              <div className="flex items-center gap-x-4">
                <p className="text-[18px] font-semibold">${product.price}</p>
                <div
                  className={`cursor-pointer rounded-full border border-gray-400  p-2 ${isWished ? "bg-[#44b8fe]" : ""}`}
                  onClick={() => {
                    handleWishlist(product);
                    setIsWished((prev) => !prev);
                  }}
                >
                  <FaRegHeart size={25} color={`${isWished ? "white" : ""}`} />
                </div>
              </div>

              <h1 className="font-bold text-[#44b8fe]"> In Stock</h1>
            </div>
            <p className="mt-8 text-[15px] text-gray-500 ">
              Discover convenience and comfort in every use, making it a
              must-have for any lifestyle. Whether you're sipping, wearing, or
              utilizing, this product is sure to become a trusted companion in
              your day-to-day activities. Embrace quality, embrace functionality
              – embrace the perfect addition to your life
            </p>

            <div className="mt-16 flex items-center  gap-x-16 px-8 max-lg:px-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const cartAmount = e.target.elements.cartAmount.value;
                  addItemWithAmount(product, parseInt(cartAmount));
                  //   console.log(cartAmount);
                }}
              >
                <input
                  ref={inputElement}
                  type="number"
                  value={cartAmount}
                  onChange={(e) => {
                    setCartAmount(e.target.value);
                  }}
                  name="cartAmount"
                  min={1}
                  placeholder="1"
                  className=" w-[100px] rounded-full border border-gray-400 py-2 text-center font-bold  outline-none"
                />
              </form>

              <button
                className="w-[150px] cursor-pointer rounded-xl border-none  bg-[#357297] p-2 text-white"
                onClick={() => {
                  // const cartAmount = e.target.elements.cartAmount.value;
                  addItemWithAmount(product, parseInt(cartAmount));
                  //   console.log(cartAmount);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* /////////////////////// */}
      </div>
    </div>
  ));
  return (
    <div className="mb-16">
      {mappedSelectedProduct};
      <SimilarProduct
        selectedProduct={selectedProduct}
        productData={productData}
      />
    </div>
  );
};

export default ProductDetail;
