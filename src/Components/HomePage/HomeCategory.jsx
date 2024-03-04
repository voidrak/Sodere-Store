import React from "react";
import { Link } from "react-router-dom";
import FoodAndDrink from "/foodanddrinks.svg";
import Beauty from "/beauty.svg";
import Shoes from "/shoes.svg";
import Clothing from "/clothing.svg";
import Books from "/books.svg";
import Electronics from "/electronics.svg";
import Jewelry from "/jewelry.svg";
import Kitchen from "/kitchen.svg";

const HomeCategory = () => {
  return (
    <div className="my-8">
      <div className="">
        <h1 className="font-os text-center text-[22px]  font-bold ">
          Shop By Category
        </h1>
        <ul className="mt-4">
          <li className="">
            <Link to="categories"></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeCategory;
