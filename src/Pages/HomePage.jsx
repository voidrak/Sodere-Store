import React from "react";
import HomeLanding from "../Components/HomePage/HomeLanding";
import HomeCategory from "@/Components/HomePage/HomeCategory";
import NewArrivals from "@/Components/HomePage/NewArrivals";

const HomePage = () => {
  return (
    <div className="overflow-y-hidden ">
      <HomeLanding />
      <HomeCategory />
      <NewArrivals />
    </div>
  );
};

export default HomePage;
