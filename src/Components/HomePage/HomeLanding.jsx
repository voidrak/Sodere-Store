import React, { useContext } from "react";
import LandingImage1 from "/home_page_image_1.webp";
import LandingImage2 from "/home_page_image_2.webp";
import { FaArrowRight, FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { ProductContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
const HomeLanding = () => {
  const { ProductData, setCurrentCategory } = useContext(ProductContext);

  return (
    <div className="overflow-y-hidden bg-slate-200">
      <div className="  relative mx-auto flex h-[90vh]  items-center   px-4 min-[576px]:px-8  sm:w-[85vw] lg:max-w-[945px] xl:max-w-[1150px] min-[1440px]:max-w-[1325px] min-[1800px]:max-w-[1440px]">
        <div className="absolute z-[1] max-w-[300px] min-[576px]:max-w-[350px] md:translate-y-[-50px]  min-[930px]:translate-y-[0px] min-[931px]:max-w-[450px] min-[1440px]:max-w-[600px] min-[1440px]:translate-x-[100px]  ">
          <p className="font-ROBOTO  text-nowrap font-semibold min-[481px]:text-[18px] xl:text-[22px]  ">
            Best of Price $128.21
          </p>
          <h1 className=" font-ROBOTO mt-5 text-[2rem] font-bold leading-9 min-[576px]:text-[2.2rem] min-[930px]:text-[2.7rem] min-[930px]:font-extrabold min-[930px]:leading-[2.6rem] xl:text-[3rem] xl:leading-[2.9rem] min-[1440px]:text-[4rem] min-[1440px]:leading-[3.5rem] ">
            Ethiopian Traditional Long Dress
          </h1>
          <Link to="categories">
            <button
              className="mt-8 flex items-center justify-center gap-x-4 border-none bg-black p-4 py-[20px] text-[15px] text-white outline-none transition-all duration-300 ease-in-out hover:scale-105  min-[930px]:text-[18px]"
              onClick={() => {
                setCurrentCategory("Clothing");
              }}
            >
              EXPLORE MORE <FaArrowRight />
            </button>
          </Link>
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
            className="ml-auto hidden w-[550px]  translate-x-[50px] md:block lg:w-[550px] min-[1600px]:w-[620px] min-[1700px]:w-[640px] min-[1800px]:w-[700px]   "
          />
        </div>
      </div>
      <div className="absolute left-0 top-[30%] ml-10 hidden xl:block ">
        <ul className=" flex flex-col gap-y-6">
          <a
            href="https://www.facebook.com/SodereEthiopia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex flex-col items-center gap-y-3">
              <p className=" rotate-180 text-[16px] font-bold [writing-mode:vertical-lr] ">
                Facebook
              </p>{" "}
              <FaFacebook />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/nahom-abraham-460656286/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex flex-col items-center gap-y-3">
              <p className=" rotate-180 text-[16px] font-[700] [writing-mode:vertical-lr] ">
                Linkedin
              </p>
              <FaLinkedin />
            </li>
          </a>
          <a
            href="https://twitter.com/rakkpoper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex flex-col items-center gap-y-3">
              <p className=" rotate-180 text-[16px] font-bold [writing-mode:vertical-lr] ">
                Twitter
              </p>{" "}
              <FaSquareXTwitter />
            </li>
          </a>
          <a
            href="https://www.instagram.com/sodereethiopia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex flex-col items-center gap-y-3">
              <p className=" rotate-180 text-[16px] font-bold [writing-mode:vertical-lr] ">
                Instagram
              </p>{" "}
              <FaInstagramSquare />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default HomeLanding;
