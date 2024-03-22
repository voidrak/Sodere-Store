import React from "react";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";
import { IoPlayCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <div className="pb-24 ">
      <div className="bg-[url('/category-bg.jpeg')] py-10 text-center">
        <h1 className="text-[34px] font-bold md:text-[44px] lg:text-[49px] min-[1200px]:text-[55px]">
          About us
        </h1>
        <div className="flex items-center justify-center gap-x-2 ">
          <Link to="/" className="flex items-center  gap-x-2">
            <FaHome />
            <p className="">Home</p>
          </Link>
          <TbMathGreater size={13} />
          <p className="font-bold">About us</p>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-[960px] items-center lg:mt-0 lg:flex xl:max-w-[1170px]">
        <div className="lg:translate-x-8">
          <div className="space-y-4 py-8 text-center">
            <h2 className="  text-[18px] font-semibold">What we are</h2>
            <h1 className="text-pretty text-[29px] font-extrabold leading-tight  ">
              Quality Products and Exceptional Service
            </h1>
            <p className="mx-auto max-w-[495px] text-pretty px-4 text-gray-500">
              Sodere Store is part of the group that brought you Sodere.com
              Ethiopian movie subscription service and SodereTube, Ethiopian
              news and video portal.
            </p>
          </div>
          <Link to="/categories">
            <button
              className="mx-auto mt-8 flex items-center justify-center gap-x-4 border-none bg-black px-4 py-[15px] text-[15px] text-white outline-none transition-all duration-300 ease-in-out hover:scale-105  min-[930px]:text-[18px]"
              onClick={() => {
                setCurrentCategory("all");
              }}
            >
              EXPLORE PRODUCTS <FaArrowRight />
            </button>
          </Link>
        </div>
        <div className="mx-auto mt-8  w-[90%] sm:w-[80%]  md:w-[70%] lg:block ">
          <img src="About_Illustration.svg" alt="" />
        </div>
      </div>
      <div className="  relative mx-auto max-w-[1580px]  rounded-xl   ">
        <img
          src="/about_thumbnail.png"
          alt="video thumbnail"
          className="md:p-4"
        />
        <IoPlayCircle
          className="  absolute  left-[50%] top-[30%] animate-bounce md:top-[40%] xl:top-[45%] "
          size={50}
          color="#026ec1"
        />
      </div>
    </div>
  );
};

export default AboutUsPage;
