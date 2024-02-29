import React from "react";
import LandingImage1 from "/home_page_image_1.png";
import LandingImage from "/home_page_image_2.png";
import { FaArrowRight } from "react-icons/fa";
const HomeLanding = () => {
  return (
    <div className="bg-slate-200">
      <div className=" relative   mx-auto flex  h-[90vh]  items-center px-4  min-[576px]:px-8 sm:w-[90vw]">
        <div className="absolute z-[1] max-w-[300px] min-[576px]:max-w-[350px]">
          <p className="text-nowrap font-ROBOTO font-semibold">
            Best of Price $128.21
          </p>
          <h1 className=" mt-5 font-ROBOTO text-[2rem] font-bold leading-9 min-[576px]:text-[2.2rem]  ">
            Ethiopian Traditional Long Dress
          </h1>
          <button className="mt-8 flex items-center justify-center gap-x-4 border-none bg-black p-4 py-[20px] text-[15px] text-white outline-none hover:scale-105 min-[425px]:w-[206px] ">
            EXPLORE MORE <FaArrowRight />
          </button>
        </div>

        <div className="relative  -z-[0] ml-auto flex  justify-start ">
          <img
            src={LandingImage}
            className=" ml-auto w-[180px]  min-[481px]:w-[220px] sm:w-[260px] md:hidden"
            alt="Girl with Traditional Ethiopian Cloth"
          />
          <img
            src={LandingImage1}
            alt="Girl with Traditional Ethiopian Cloth"
            className="ml-auto hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
