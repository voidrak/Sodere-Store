import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const SharedLayout = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  return (
    <div>
      <Header isNavbar={isNavbar} setIsNavbar={setIsNavbar} />
      <Navbar isNavbar={isNavbar} setIsNavbar={setIsNavbar} />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
