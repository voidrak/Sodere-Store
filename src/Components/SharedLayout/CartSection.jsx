import { CartContext } from "@/contexts/CartContext";
import React, { useContext } from "react";
import { IoCloseSharp, IoCartOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline, IoMdAdd, IoMdRemove } from "react-icons/io";

const CartSection = ({ isCart, setIsCart }) => {
  const { cartItemsList } = useContext(CartContext);

  const mappedCartList = cartItemsList.map((item) => (
    <div className="grid grid-cols-3 ">
      <div className="h-[99px] w-[78px] bg-white">
        <img src="Product_Image/2PSiRI.webp" className="h-[100%] w-[100%]" />
      </div>
      <div className="col-span-2">
        <div className="flex  items-center justify-between">
          <h1 className="text-[18px] font-bold ">Air Jordan 4 Retro</h1>
          <IoIosCloseCircleOutline size={25} />
        </div>
        <p className="translate-y-[-4px] text-gray-500">Shoes</p>
        <div className="mt-3 flex justify-between">
          <p className=" font-semibold">$217.08 </p>
          <div className="flex items-center  gap-x-2 border border-gray-400">
            <button className="p-2">
              <IoMdRemove />
            </button>
            <h1 className="">2</h1>
            <button className="p-[9px]">
              <IoMdAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div
      className={`absolute right-0 top-0 z-[999] min-h-[100vh] w-[101%] max-w-[470px] translate-x-1 rounded-b-sm  border-b border-gray-600 bg-white pb-8 transition-all duration-300 ease-in-out  ${!isCart ? "mr-[-110vw] " : ""}`}
    >
      <div className=" flex items-center justify-between bg-[#f5f5f5] px-5 ">
        <h1 className="py-6 text-[23px] font-semibold">Shopping Cart</h1>
        <IoCloseSharp
          size={25}
          onClick={() => {
            setIsCart(false);
            console.log("object");
          }}
        />
      </div>

      {mappedCartList.length < 1 ? (
        <div className=" mt-48 flex h-[100%] flex-col items-center justify-center">
          <IoCartOutline size={50} />
          <h1 className="my-3 text-[19px]">No items Added to your cart</h1>
          <button className="mt-3 rounded-sm bg-black px-6 py-3 font-semibold text-white">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-5 pl-2 pr-4 min-[425px]:pl-4 min-[425px]:pr-8 ">
          <h1 className="mb-8 mt-4 text-center text-[25px]">
            12 Items in The Cart
          </h1>
          {mappedCartList}
        </div>
      )}
    </div>
  );
};

export default CartSection;
