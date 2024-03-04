import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Beauty from "/beauty.svg";
import Kitchen from "/kitchen.svg";
import Shoes from "/shoes.svg";
import Electronics from "/electronics.svg";
import Clothing from "/clothing.svg";
import Jewelry from "/jewelry.svg";
import FoodAndDrink from "/foodanddrinks.svg";
import Books from "/books.svg";
import { ProductContext } from "@/contexts/ProductContext";

const HomeCategory = () => {
  const { setCurrentCategory } = useContext(ProductContext);
  const categoriesList = [
    {
      image: Beauty,
      title: "Beauty",
    },
    {
      image: Kitchen,
      title: "Home & Kitchen",
    },
    {
      image: Shoes,
      title: "Shoes",
    },
    {
      image: Electronics,
      title: "Electronics",
    },
    {
      image: Clothing,
      title: "Clothing",
    },
    {
      image: Jewelry,
      title: "Jewelry",
    },
  ];
  const mappedCategoryList = categoriesList.map((item, index) => (
    <li
      className="group w-[90%] max-w-[130px] "
      key={index}
      onClick={() => {
        setCurrentCategory(item.title);
      }}
    >
      <Link to="categories">
        <img
          src={item.image}
          className={` mx-auto mb-2  w-[60%] group-hover:scale-110 ${item.image === Shoes ? "mb-[0] md:mt-4" : " "}  `}
          alt={item}
        />
        <p className=" text-nowrap text-center group-hover:font-bold">
          {item.title}
        </p>
        <p></p>
      </Link>
    </li>
  ));
  return (
    <div className="my-[5rem]">
      <div className="mx-auto w-[90%] md:w-[720px] min-[992px]:w-[960px] min-[1200px]:w-[1170px] ">
        <h1 className="  text-center text-[25px] font-bold  min-[450px]:text-[28px] sm:text-[30px] lg:text-[34px] ">
          Shop By Category
        </h1>
        <ul className="mt-8 grid grid-cols-2 place-items-center gap-y-8 md:grid-cols-3 min-[992px]:grid-cols-6 lg:divide-x-2">
          {mappedCategoryList}
        </ul>
      </div>
    </div>
  );
};

export default HomeCategory;
