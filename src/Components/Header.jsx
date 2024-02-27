import React from "react";
import { Link } from "react-router-dom";
import SodereLogo from "/sodere-logo.png";
import { CgMenuLeft } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
const Header = ({ setIsNavbar, isNavbar }) => {
  return (
    <div className="w-[100%] flex px-2 items-center justify-between py-3">
      <div className="flex gap-x-2 items-center">
        <CgMenuLeft
          size={22}
          onClick={() => {
            setIsNavbar(true);
          }}
        />
        <CiSearch size={22} />
      </div>
      <Link to="/" className="flex justify-center gap-x-1 items-center">
        <img src={SodereLogo} alt="Sodere Logo" className="w-[50%] h-auto " />
      </Link>

      <div className="flex items-center gap-x-3">
        <IoPersonOutline size={20} />
        <FaRegHeart size={20} />
        <FiShoppingBag size={20} />
      </div>
    </div>
  );
};

export default Header;
