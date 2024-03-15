import React from "react";
import { IoMdAdd } from "react-icons/io";

const HomeCollection = () => {
  return (
    <div className="mb-[10rem] mt-[4rem]">
      <div className="text-center">
        <p className=" font-semibold  underline underline-offset-2">
          20% OFF ON SWAN KITCHEN APPLIANCES
        </p>
        <h1 className=" mx-auto  mt-4 w-[280px] text-[29px] leading-[33px] tracking-wider sm:w-[324px] sm:text-[33px] sm:leading-[36px] md:w-[364px] md:text-[37px] md:leading-[41px] lg:w-[541px] lg:text-[50px] lg:leading-[50px] min-[1200px]:w-[541px] min-[1200px]:text-[55px] min-[1200px]:leading-[55px] ">
          Modern kitchen basic{" "}
          <span className="font-bold text-[#2178ac] underline underline-offset-1">
            collection
          </span>
        </h1>
      </div>
      <div className="relative  mx-auto mt-4 ">
        <img src="/home_choice.jpg" alt="" className="w-[100%] rounded-sm" />

        {/* ///////////////////////////////////////////////////////////// */}

        <span class="absolute left-[20%] top-[35%] flex items-center  justify-center xl:left-[21%]">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
          <span class=": relative inline-flex h-[20px]  w-[20px] items-center justify-center rounded-full bg-sky-500 text-white sm:h-[30px] sm:w-[30px] lg:h-[40px] lg:w-[40px]">
            <IoMdAdd />
          </span>
        </span>

        {/* ///////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
};

export default HomeCollection;
