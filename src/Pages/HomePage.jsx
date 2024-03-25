import React from "react";
import HomeLanding from "../Components/HomePage/HomeLanding";
import HomeCategory from "@/Components/HomePage/HomeCategory";
import NewArrivals from "@/Components/HomePage/NewArrivals";
import HomeCollection from "@/Components/HomePage/HomeCollection";
import FeaturedProduct from "@/Components/HomePage/FeaturedProduct";
import HomeWatch from "@/Components/HomePage/HomeWatch";
import ScrollToTop from "@/Components/ScrollToTop";
const HomePage = () => {
  return (
    <div className="overflow-y-hidden ">
      <HomeLanding />
      <HomeCategory />
      <NewArrivals />
      <HomeCollection />
      <FeaturedProduct />
      <HomeWatch />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
