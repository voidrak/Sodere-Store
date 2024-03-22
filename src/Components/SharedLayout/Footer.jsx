import React from "react";
import {
  FaShippingFast,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaClock,
} from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="  w-full bg-[#ecf4fa]  ">
      <div className=" lg:grid-cols- mx-auto  grid  max-w-[392px]   gap-y-8 py-24 min-[618px]:max-w-[690px] min-[618px]:grid-cols-2 lg:max-w-[80%] xl:max-w-[1390px] xl:grid-cols-4 ">
        <div className=" grid grid-cols-3 items-center   gap-x-3 pr-2">
          <FaShippingFast
            size={60}
            color="#2178ac"
            className="justify-self-center"
          />
          <div className="  col-span-2 ">
            <h1 className="text-[17px] font-semibold ">FREE SHIPPING</h1>
            <p className=" text-[15px] font-bold text-gray-400">
              On order above $100
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-3 items-center   gap-x-3 pr-2">
          <IoWallet size={60} color="#2178ac" className="justify-self-center" />
          <div className="  col-span-2">
            <h1 className="text-[17px] font-semibold ">30 DAYS RETURN</h1>
            <p className=" text-[15px] font-bold text-gray-400">
              Simply return it within 30 days
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-3 items-center   gap-x-3 pr-2">
          <FaClock size={60} color="#2178ac" className="justify-self-center" />
          <div className="  col-span-2">
            <h1 className="text-[17px] font-semibold ">SUPPORT 24/7</h1>
            <p className=" text-[15px] font-bold text-gray-400">
              Contact us 24/7
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-3 items-center   gap-x-3 pr-2">
          <GrSecure size={60} color="#2178ac" className="justify-self-center" />
          <div className="  col-span-2">
            <h1 className="text-[17px] font-semibold ">100% PAYMENT SECURE</h1>
            <p className=" text-[15px] font-bold text-gray-400">
              secure payment with PEV
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yelow-300 mx-auto  grid max-w-[540px] border-y border-gray-300 px-3 md:max-w-[830px] lg:max-w-[1400px] ">
        <div className="mx-auto my-8 flex w-[95%] flex-col items-center gap-y-4">
          <img
            src="/sodere-logo.png"
            alt="sodere logo"
            className="w-[150px] sm:w-[200px] "
          />
          <p className="text-center text-[17px] text-gray-500 ">
            Bringing Quality Home to You, Every Time You Shop with Us
          </p>
          <ul className="flex gap-x-6">
            <li>
              <a href="">
                <FaFacebookF size={20} />
              </a>
            </li>
            <li>
              <a href="">
                {" "}
                <FaInstagram size={20} />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitter size={20} />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedinIn size={20} />
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-re00 mx-auto grid px-3 pb-8 md:grid-cols-2 lg:grid-cols-4 lg:px-8 ">
          <div className="group border-b-2 border-gray-300  pb-3  md:border-none ">
            <h1 className="flex items-center justify-between py-4 text-[17px] font-bold  ">
              Collections{" "}
              <IoIosArrowDown
                size={18}
                className="translate-y-[1px]  group-hover:hidden  md:hidden "
              />
              <IoIosArrowUp className="hidden  group-hover:block md:group-hover:hidden" />
            </h1>
            <ul className=" hidden cursor-pointer group-hover:block  md:block ">
              <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                Smart home
              </li>
              <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                Living room
              </li>
              <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                Bedroom
              </li>
              <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                Outdoor
              </li>
              <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                Lighting
              </li>
            </ul>
          </div>
          <div className="group border-b-2 border-gray-300  pb-3  md:border-none ">
            <h1 className="flex items-center justify-between py-4 text-[17px] font-bold  ">
              Information{" "}
              <IoIosArrowDown
                size={18}
                className="translate-y-[1px]  group-hover:hidden  md:hidden "
              />
              <IoIosArrowUp className=" hidden group-hover:block md:group-hover:hidden" />
            </h1>
            <ul className=" hidden cursor-pointer group-hover:block md:block ">
              <Link to="about">
                <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                  About us
                </li>
              </Link>
              <Link to="">
                <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                  Location
                </li>
              </Link>{" "}
              <Link to="">
                <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                  Contact us
                </li>
              </Link>{" "}
              <Link to="">
                <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                  Report abuse
                </li>
              </Link>{" "}
              <Link to="">
                <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                  Download SodereStore App
                </li>
              </Link>
            </ul>
          </div>
          <div className="group border-b-2 border-gray-300  pb-3  md:border-none ">
            <h1 className="flex items-center justify-between py-4 text-[17px] font-bold  ">
              Services{" "}
              <IoIosArrowDown
                size={18}
                className="translate-y-[1px]  group-hover:hidden  md:hidden "
              />
              <IoIosArrowUp className="hidden  group-hover:block md:group-hover:hidden" />
            </h1>
            <ul className=" hidden cursor-pointer group-hover:block md:block ">
              <Link to="">
                <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                  Privacy Policy
                </li>
              </Link>
              <Link to="">
                <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                  Why Choose Us?
                </li>
              </Link>
              <Link to="">
                <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                  Terms & conditions
                </li>
              </Link>
              <Link to="">
                <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                  Return Policy
                </li>
              </Link>
              <Link to="">
                <li className=" p-1 text-[17px] text-gray-500 hover:text-gray-900 ">
                  Shipping & Payment Info
                </li>
              </Link>
            </ul>
          </div>
          <div className="mt-8  pb-16  lg:mt-0">
            <h1 className="mb-4 text-pretty  text-[18px] font-bold text-gray-700">
              Subscribe to our newsletter and Get 10% off on your first order.
            </h1>
            <div className="flex items-center justify-between border-b-2 border-black px-3 py-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="translate-x-[-12px] border-none bg-transparent  outline-none placeholder:text-[17px] placeholder:text-black"
              />
              <CiMail size={18} />
            </div>
            <div className=" mr-auto mt-6 max-w-[350px]  ">
              <img
                src="/payment-getway.avif"
                alt="payment-gateway"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4t pb-8">
        <h1 className="text-center">
          {" "}
          &copy; 2024 Sodere is proudly powered by{" "}
          <span className="font-semibold text-[#3aa4f5]">
            <a
              href="http://github.com/voidrak"
              target="_blank"
              rel="noopener noreferrer"
            >
              RAK
            </a>
          </span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Footer;
