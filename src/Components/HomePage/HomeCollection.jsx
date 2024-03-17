import React from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
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
      <div className="relative  mx-auto mt-16 ">
        <img
          src="/home_choice.jpg"
          alt=""
          className=" min-[482px]:min-h[] w-[100%] rounded-sm max-[481px]:h-[200px]  "
        />

        {/* ///////////////////////////////////////////////////////////// */}
        <div className=" group">
          <span className="absolute left-[20%] top-[35%] flex items-center  justify-center xl:left-[21%]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
            <span className=": relative inline-flex h-[20px]  w-[20px] items-center justify-center rounded-full bg-sky-500 text-white sm:h-[30px] sm:w-[30px] lg:h-[40px] lg:w-[40px]">
              <div className="group-hover:hidden">
                <IoMdAdd />
              </div>
              <div className="hidden group-hover:flex">
                <IoMdClose />
              </div>
            </span>
          </span>

          <div className="absolute left-[27%] top-[10%] z-10 mr-2 hidden max-w-[350px] space-x-3 space-y-1  rounded-md bg-white p-2 group-hover:flex  min-[425px]:left-[25%] min-[576px]:max-w-[400px] sm:p-4 md:top-[15%] lg:left-[24.2%] lg:top-[20%] xl:top-[25%] min-[1700px]:left-[23.5%]  ">
            <div className=" my-auto w-[40%] ">
              <img
                src="Product_Image/eR1kGT.jpeg"
                alt=""
                className="w-[100%]"
              />
            </div>
            <div className="   space-y-1">
              <div className="flex">
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
              </div>
              <h1 className=" text-[12px] font-semibold  sm:text-[17px]">
                Swan Nordic Slice Toaster
              </h1>
              <div className="flex gap-x-4">
                <p className="line-through">$200.00</p>
                <p className="font-semibold"> $168.65</p>
              </div>
              <Link to="/eR1kGT">
                <button className="mt-1 rounded-sm bg-black px-2 py-2 font-semibold text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}
        <div className="group">
          <span className="absolute left-[45%] top-[30%] flex items-center  justify-center ">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
            <span className=": relative inline-flex h-[20px]  w-[20px] items-center justify-center rounded-full bg-sky-500 text-white sm:h-[30px] sm:w-[30px] lg:h-[40px] lg:w-[40px]">
              <div className="group-hover:hidden">
                <IoMdAdd />
              </div>
              <div className="hidden group-hover:flex">
                <IoMdClose />
              </div>
            </span>
          </span>
          <div className="absolute left-[27%] top-[20%] z-10 mr-2 hidden max-w-[350px] items-center space-x-3 space-y-1  rounded-md bg-white p-2 group-hover:flex  min-[425px]:top-[5%] min-[576px]:max-w-[400px] sm:left-[37%] sm:p-4 md:left-[50%] md:top-[10%] lg:left-[49.5%] xl:left-[48.5%]  xl:top-[15%] min-[1700px]:left-[47.5%] min-[1700px]:top-[17%]  ">
            <div className=" my-auto w-[40%] ">
              <img
                src="Product_Image/I2BdHG.png"
                alt=""
                className="w-[100%] scale-110"
              />
            </div>
            <div className="   space-y-1">
              <div className="flex">
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
              </div>
              <h1 className=" text-[12px] font-semibold  sm:text-[17px]">
                Swan Nordic Micro Wave
              </h1>
              <div className="flex gap-x-4">
                <p className="line-through">$200.00</p>
                <p className="font-semibold"> $182.15</p>
              </div>
              <Link to="/I2BdHG">
                <button className="mt-1 rounded-sm bg-black px-2 py-2 font-semibold text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////// */}
        {/* ///////////////////////////////////////////////////////////// */}
        <div className="group">
          <span className="absolute left-[75%] top-[50%] flex items-center  justify-center ">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-75"></span>
            <span className=": relative inline-flex h-[20px]  w-[20px] items-center justify-center rounded-full bg-sky-500 text-white sm:h-[30px] sm:w-[30px] lg:h-[40px] lg:w-[40px]">
              <div className="group-hover:hidden">
                <IoMdAdd />
              </div>
              <div className="hidden group-hover:flex">
                <IoMdClose />
              </div>
            </span>
          </span>
          <div className="  absolute right-[25%] top-[20%] z-10 mr-2 hidden max-w-[250px] items-center  space-x-3 space-y-1 rounded-md bg-white p-2  group-hover:flex min-[425px]:top-[10%]     min-[425px]:max-w-[300px]   min-[481px]:right-[25%]   min-[576px]:max-w-[350px]     sm:top-[18%]    sm:p-4     md:top-[25%] min-[830px]:top-[28%]  lg:top-[30%] xl:top-[35%] min-[1700px]:top-[40%]  ">
            <div className=" my-auto w-[40%] ">
              <img
                src="Product_Image/RfLTmM.jpeg"
                alt=""
                className=" w-[100%] scale-110"
              />
            </div>
            <div className="   space-y-1">
              <div className="flex">
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
                <MdOutlineStar color="gold" size={20} />
              </div>
              <h1 className=" text-[12px] font-semibold  sm:text-[17px]">
                Swan Nordic Style Kettle
              </h1>
              <div className="flex gap-x-4">
                <p className="line-through">$200.00</p>
                <p className="font-semibold"> $144.95</p>
              </div>
              <Link to="/RfLTmM">
                <button className="mt-1 rounded-sm bg-black px-2 py-2 font-semibold text-white">
                  SHOP NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////// */}
      </div>
    </div>
  );
};

export default HomeCollection;
