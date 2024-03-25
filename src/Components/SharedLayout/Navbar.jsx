import React, { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProductContext } from "@/contexts/ProductContext";
const Navbar = ({ setIsNavbar, isNavbar }) => {
  const [isCatagories, setIsCatagories] = useState(false);
  const [isPages, setIsPages] = useState(false);
  const { setCurrentCategory, categories } = useContext(ProductContext);

  const mappedSidebar = categories.map((category, index) => (
    <li
      className="py-2"
      key={index}
      onClick={() => {
        setIsNavbar(false);
        setCurrentCategory(category);
      }}
    >
      <Link to="/categories">
        <p className="">{category}</p>
      </Link>
    </li>
  ));

  return (
    <div
      className={`absolute left-0 top-0 z-[9999] min-h-[100vh]  w-[320px] bg-white transition-all duration-500 ease-in-out ${
        !isNavbar ? "ml-[-100%]" : ""
      }`}
    >
      <div className="flex w-[100%] justify-between bg-black px-4 py-3">
        <h1 className="text-xl text-white ">Menu</h1>
        <IoCloseSharp
          color="white"
          size={30}
          onClick={() => {
            setIsNavbar(false);
          }}
        />
      </div>
      <ul className="py-3 pb-[60px]">
        <li className=" flex items-center border-b-2 border-gray-100 px-4 py-[20px]">
          <Link to="/">
            <h1 className="font-semibold">HOME</h1>
          </Link>
        </li>
        <li className=" flex items-center border-b-2 border-gray-100 px-4 py-[20px]">
          <Link to="/">
            <h1 className="font-semibold">WISHLIST</h1>
          </Link>
        </li>
        <li className=" flex items-center border-b-2 border-gray-100 px-4 py-[20px]">
          <Link to="/">
            <h1 className="font-semibold">SALE</h1>
          </Link>
        </li>
        <li className=" flex items-center border-b-2 border-gray-100 px-4 py-[20px]">
          <Link to="/">
            <h1 className="font-semibold">SHOP</h1>
          </Link>
        </li>

        <li className=" grid border-b-2 border-gray-100  px-4 py-[20px] ">
          <div className="flex  items-center justify-between">
            <h1 className="font-semibold">CATEGORIES</h1>
            <div
              onClick={() => {
                setIsCatagories(!isCatagories);
              }}
              className="flex"
            >
              {!isCatagories ? <IoMdAdd /> : <IoCloseSharp />}
            </div>
          </div>
          <ul className={`mt-2 pl-2 ${!isCatagories ? "hidden" : ""} `}>
            {mappedSidebar}
          </ul>
        </li>

        <li className=" grid border-b-2 border-gray-100  px-4 py-[20px] ">
          <div className="flex  items-center justify-between">
            <h1 className="font-semibold">PAGES</h1>
            <div
              onClick={() => {
                setIsPages(!isPages);
              }}
              className="flex"
            >
              {!isPages ? <IoMdAdd /> : <IoCloseSharp />}
            </div>
          </div>
          <ul className={`mt-2 pl-2 ${!isPages ? "hidden" : ""} `}>
            <li
              className="py-2"
              onClick={() => {
                setIsNavbar(false);
              }}
            >
              <Link to="/about">
                <p className="">About Us</p>
              </Link>
            </li>
            <li
              className="py-2"
              onClick={() => {
                setIsNavbar(false);
              }}
            >
              <Link to="/contact">
                <p className="">Contact Us</p>
              </Link>
            </li>
            <li
              className="py-2"
              onClick={() => {
                setIsNavbar(false);
              }}
            >
              <Link to="/">
                <p className=""> Privacy Policy</p>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className=" flex cursor-pointer justify-evenly">
        <FaFacebook size={30} />
        <FaInstagramSquare size={30} />
        <FaSquareXTwitter size={30} />
        <FaLinkedin size={30} />
      </div>
    </div>
  );
};

export default Navbar;
