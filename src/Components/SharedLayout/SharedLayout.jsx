import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import SearchSection from "./SearchSection";

const SharedLayout = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  return (
    <div>
      <Header setIsNavbar={setIsNavbar} setIsSearch={setIsSearch} />
      <Navbar isNavbar={isNavbar} setIsNavbar={setIsNavbar} />
      <SearchSection isSearch={isSearch} setIsSearch={setIsSearch} />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
