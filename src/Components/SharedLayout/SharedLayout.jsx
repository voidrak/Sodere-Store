import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import SearchSection from "./SearchSection";
import CartSection from "./CartSection";

const SharedLayout = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isCart, setIsCart] = useState(false);
  return (
    <div className="">
      <Header
        setIsNavbar={setIsNavbar}
        setIsSearch={setIsSearch}
        isSearch={isSearch}
        setIsCart={setIsCart}
      />
      <Navbar isNavbar={isNavbar} setIsNavbar={setIsNavbar} />
      <SearchSection isSearch={isSearch} setIsSearch={setIsSearch} />
      <CartSection isCart={isCart} setIsCart={setIsCart} />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
