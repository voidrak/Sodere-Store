import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import CategoriesSection from "../Components/CategoryPage/CategoriesSection";
import ScrollToTop from "@/Components/ScrollToTop";
const CategoriesPage = () => {
  return (
    <div className="">
      <CategoriesSection />
      <ScrollToTop />
    </div>
  );
};

export default CategoriesPage;
