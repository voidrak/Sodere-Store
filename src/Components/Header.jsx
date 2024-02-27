import React from "react";
import { Link } from "react-router-dom";
import SodereLogo from "/sodere-logo.png";
import { CgMenuLeft } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { FaChevronCircleRight } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
const Header = ({ setIsNavbar, isNavbar }) => {
  return (
    <>
      <div className=" mx-auto flex w-[100%] max-w-[1640px] items-center justify-between px-2  py-3 md:justify-start md:px-4 md:py-4">
        <div className="flex items-center gap-x-2 md:hidden">
          <CgMenuLeft
            size={22}
            onClick={() => {
              setIsNavbar(true);
            }}
          />
          <IoSearch size={22} />
        </div>

        <Link
          to="/"
          className="flex items-center justify-center gap-x-1 md:justify-start"
        >
          <img
            src={SodereLogo}
            alt="Sodere Logo"
            className="w-[100px] min-[425px]:w-[135px] lg:w-[150px]"
          />
        </Link>

        <ul className=" ] relative ml-8  hidden   gap-x-4 text-lg  before:absolute before:left-[-20px] before:top-1 before:h-[20px] before:w-[1px] before:bg-gray-500 md:flex">
          <li
            className="duration-900 relative font-bold text-gray-700 after:block  after:h-[2px] after:w-[0%]  after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] "
            to="/"
          >
            <Link>Home</Link>
          </li>
          <li className="duration-900 group relative  font-bold text-gray-700  after:block after:h-[2px] after:w-[0%] after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] ">
            <Link to="/">Categories</Link>
            <ul className=" absolute left-[-200px] top-[-500px] grid w-[700px] grid-cols-3  gap-x-4 gap-y-2 bg-white p-3 font-normal  transition-all duration-200 ease-in-out *:text-[15px] group-hover:top-[50px] lg:*:text-[18px] ">
              <li>
                <Link
                  to=""
                  className="flex items-center justify-between hover:font-semibold "
                >
                  Holiday and Seasonal <FaChevronCircleRight />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center justify-between hover:font-semibold "
                >
                  Books <FaChevronCircleRight />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center justify-between hover:font-semibold "
                >
                  Clothing and Shoes <FaChevronCircleRight />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center justify-between hover:font-semibold "
                >
                  Grocery <FaChevronCircleRight />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center justify-between hover:font-semibold "
                >
                  Food <FaChevronCircleRight />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center justify-between hover:font-semibold "
                >
                  Jewelry and Watches <FaChevronCircleRight />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center justify-between hover:font-semibold "
                >
                  Home and Kitchen <FaChevronCircleRight />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center justify-between hover:font-semibold "
                >
                  Electronics <FaChevronCircleRight />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center justify-between hover:font-semibold "
                >
                  Toys and Kids <FaChevronCircleRight />
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="flex items-center justify-between hover:font-semibold "
                >
                  Furniture <FaChevronCircleRight />
                </Link>
              </li>
            </ul>
          </li>
          <li
            className="duration-900 relative font-bold text-gray-700 after:block  after:h-[2px] after:w-[0%]  after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] "
            to="/"
          >
            <Link>Shop</Link>
          </li>
          <li
            className="duration-900 relative font-bold text-gray-700 after:block  after:h-[2px] after:w-[0%]  after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] "
            to="/"
          >
            <Link>Contact Us</Link>
          </li>
        </ul>
        <div className="flex  items-center gap-x-3 md:ml-auto">
          <IoSearch size={22} className="hidden  md:block" />
          <IoPersonOutline size={20} />
          <FaRegHeart size={20} />
          <FiShoppingBag size={20} />
        </div>
      </div>
    </>
  );
};

export default Header;
