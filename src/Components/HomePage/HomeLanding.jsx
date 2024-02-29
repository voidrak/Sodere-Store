import React from "react";
import LandingImage1 from "/home_page_image_1.png";
import LandingImage2 from "/home_page_image_2.png";
import { FaArrowRight } from "react-icons/fa";
const HomeLanding = () => {
  return (
    <div className="bg-slate-200">
      <div className=" relative mx-auto flex  h-[90vh]  items-center   px-4 min-[576px]:px-8  sm:w-[85vw] lg:max-w-[945px] xl:max-w-[1150px] min-[1440px]:max-w-[1325px] ">
        <div className="absolute z-[1] max-w-[300px] min-[576px]:max-w-[350px] md:translate-y-[-50px]  min-[930px]:translate-y-[0px] min-[931px]:max-w-[450px] min-[1440px]:max-w-[600px] min-[1440px]:translate-x-[100px]  ">
          <p className="text-nowrap  font-ROBOTO font-semibold min-[481px]:text-[18px] xl:text-[22px]  ">
            Best of Price $128.21
          </p>
          <h1 className=" mt-5 font-ROBOTO text-[2rem] font-bold leading-9 min-[576px]:text-[2.2rem] min-[930px]:text-[2.7rem] min-[930px]:font-extrabold min-[930px]:leading-10 xl:text-[3rem] xl:leading-[2.9rem] min-[1440px]:text-[4rem] min-[1440px]:leading-[3.5rem] ">
            Ethiopian Traditional Long Dress
          </h1>
          <button className="mt-8 flex items-center justify-center gap-x-4 border-none bg-black p-4 py-[20px] text-[15px] text-white outline-none hover:scale-105 min-[425px]:w-[206px] min-[930px]:text-[18px]">
            EXPLORE MORE <FaArrowRight />
          </button>
        </div>

        <div className="relative  -z-[0] ml-auto flex  justify-start ">
          <img
            src={LandingImage2}
            className=" ml-auto w-[180px]  min-[481px]:w-[220px] sm:w-[220px] md:hidden md:translate-x-10"
            alt="Girl with Traditional Ethiopian Cloth"
          />
          <img
            src={LandingImage1}
            alt="Girl with Traditional Ethiopian Cloth"
            className="ml-auto hidden w-[550px]  translate-x-[50px] md:block lg:w-[600px] min-[1600px]:w-[700px] min-[1700px]:w-[750px]   "
          />
        </div>
      </div>
    </div>
  );
};

export default HomeLanding;
