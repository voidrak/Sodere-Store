import React, { useEffect, useState } from "react";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { TbMathGreater } from "react-icons/tb";
import { IoPlayCircle } from "react-icons/io5";
import { FaMedal } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import ScrollToTop from "@/Components/ScrollToTop";

const AboutUsPage = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="pb-24 ">
      <div className="bg-[url('/category-bg.jpeg')] py-14 text-center">
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
        <div className="mx-auto mt-8  w-[90%] sm:w-[80%]  md:w-[65%] lg:block ">
          <img src="About_Illustration.svg" alt="" />
        </div>
      </div>
      <div className=" relative  mx-auto max-w-[1580px] cursor-pointer  rounded-xl   ">
        <img
          src="/about_thumbnail.png"
          alt="video thumbnail"
          className={`md:p-4 ${isVideoPlaying ? "hidden" : ""}`}
        />
        <IoPlayCircle
          className={` absolute  left-[50%]  top-[30%] size-[50px] animate-bounce md:top-[40%] md:size-[65px] lg:size-[80px] xl:top-[45%] ${isVideoPlaying ? "hidden" : ""} `}
          color="#026ec1"
          onClick={() => {
            setIsVideoPlaying(true);
          }}
        />
        <div className="  left-0 top-0 mx-auto  max-h-[587px] w-[90%] max-w-[1044px] rounded-lg xl:max-h-[675px]   xl:max-w-[1200px]">
          <video
            className={`  h-full w-full ${!isVideoPlaying ? "hidden" : ""}`}
            controls
            autoPlay
            muted
            loop
          >
            <source src=" /video/Sodere_Store.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <IoMdCloseCircle
            color="#026ec1"
            className={` absolute  right-[10%]  top-[10%] size-[30px]  sm:size-[40px] lg:size-[50px] min-[1440px]:right-[15%]   ${!isVideoPlaying ? "hidden" : ""} `}
            onClick={() => {
              setIsVideoPlaying(false);
            }}
          />
        </div>
      </div>

      <div className="mx-auto mt-16  items-center lg:flex xl:max-w-[1170px]">
        <div className="mx-auto my-8 hidden gap-x-4 lg:block ">
          <img
            src="/E-Commerce_Illustrations.jpg"
            alt=""
            className="mx-auto w-full "
          />
        </div>
        <div className="mx-auto max-w-[630px] lg:max-w-full">
          <h1 className="  px-8 text-center text-[29px] font-bold leading-tight sm:text-[33px] md:text-[37px] ">
            Why choose Sodere furniture!
          </h1>
          <div className="mt-8">
            {/* ////////////////////////// */}
            <div className="mt-4 grid grid-cols-[1fr,3fr] gap-x-4 ">
              <div className="mx-auto">
                <img src="/quality.png" alt="" className="size-[60px]  " />
              </div>
              <div className="s  space-y-2 px-2  ">
                <h2 className="text-[17px] font-bold min-[576px]:text-[18px] ">
                  Quality Assurance
                </h2>
                <p className=" text-gray-500 ">
                  shop with confidence knowing each item is quality-assured
                </p>
              </div>
            </div>
            {/* ////////////////////////// */}

            {/* ////////////////////////// */}

            <div className="mt-4 grid grid-cols-[1fr,3fr] gap-x-4 ">
              <div className="mx-auto">
                <img src="/wide-product.png" alt="" className="size-[60px]  " />
              </div>
              <div className="  space-y-2 px-2  ">
                <h2 className="text-[17px] font-bold min-[576px]:text-[18px] ">
                  Wide Range of Products
                </h2>
                <p className=" text-gray-500 ">
                  Discover a vast selection of products
                </p>
              </div>
            </div>
            {/* ////////////////////////// */}

            <div className="mt-4 grid grid-cols-[1fr,3fr] gap-x-4 ">
              <div className="mx-auto">
                <img src="  /fast.png" alt="" className="size-[60px]  " />
              </div>
              <div className="  space-y-2 px-2  ">
                <h2 className="text-[17px] font-bold min-[576px]:text-[18px] ">
                  Fast and Reliable Shipping
                </h2>
                <p className=" text-gray-500 ">
                  enjoy swift and dependable shipping
                </p>
              </div>
            </div>
            {/* ////////////////////////// */}
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default AboutUsPage;
