import { ProductContext } from "@/contexts/ProductContext";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import ProductDetail from "@/Components/ProductPage/ProductDetail";

const ProductPage = () => {
  return (
    <div>
      <ProductDetail />
    </div>
  );
};

export default ProductPage;
