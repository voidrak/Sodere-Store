import React from "react";
import { Link } from "react-router-dom";
import SodereLogo from "/logo2.png";
import { CgMenuLeft } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <div className="w-[100%] flex px-2 items-center justify-between py-2">
      <div className="flex gap-x-2 items-center">
        <CgMenuLeft size={25} />
        <CiSearch size={20} />
      </div>
      <div className=" justify-self-center ">
        <Link to="/" className="flex">
          <img src={SodereLogo} alt="Sodere Logo" className="w-[10%]" />
          <h1 className="text-[#327cad] font-bold">SODERE</h1>
        </Link>
      </div>

      <div className="flex items-center">
        <IoPersonOutline />
        <FaRegHeart />
        <FiShoppingBag />
      </div>
    </div>
  );
};

export default Header;
