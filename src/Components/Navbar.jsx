import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = ({ setIsNavbar, isNavbar }) => {
  const [isCatagories, setIsCatagories] = useState(false);
  const [isPages, setIsPages] = useState(false);
  return (
    <div
      className={`absolute top-0 left-0 bg-white  w-[100%] h-[100vh] transition-all ease-in-out duration-500 ${
        !isNavbar ? "ml-[-100%]" : ""
      }`}
    >
      <div className="bg-black w-[100%] flex justify-between py-3 px-4">
        <h1 className="text-white text-xl">Menu</h1>
        <IoCloseSharp
          color="white"
          size={30}
          onClick={() => {
            setIsNavbar(false);
          }}
        />
      </div>
      <ul className="py-3 pb-[60px]">
        <li className=" py-[20px] border-b-2 border-gray-100 flex items-center px-4">
          <Link to="/">
            <h1 className="font-semibold">HOME</h1>
          </Link>
        </li>
        <li className=" py-[20px] border-b-2 border-gray-100 flex items-center px-4">
          <Link to="/">
            <h1 className="font-semibold">WISHLIST</h1>
          </Link>
        </li>
        <li className=" py-[20px] border-b-2 border-gray-100 flex items-center px-4">
          <Link to="/">
            <h1 className="font-semibold">SALE</h1>
          </Link>
        </li>
        <li className=" py-[20px] border-b-2 border-gray-100 flex items-center px-4">
          <Link to="/">
            <h1 className="font-semibold">SHOP</h1>
          </Link>
        </li>

        <li className=" py-[20px] border-b-2 border-gray-100  grid px-4 ">
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
            <li className="py-2">
              <Link to="/">
                <p className="">Beauty and Cosmetics</p>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/">
                <p className="">Clothing</p>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/">
                <p className="">Grocery</p>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/">
                <p className="">Electronics</p>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/">
                <p className=""> Watches and Jewelry</p>
              </Link>
            </li>
          </ul>
        </li>

        <li className=" py-[20px] border-b-2 border-gray-100  grid px-4 ">
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
            <li className="py-2">
              <Link to="/">
                <p className="">About Us</p>
              </Link>
            </li>
            <li className="py-2">
              <Link to="/">
                <p className="">Contact Us</p>
              </Link>
            </li>
            <li className="py-2">
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
