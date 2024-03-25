import React, { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import {
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
const ContactUsPage = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);
  return (
    <div className="mx-auto min-h-[100svh]  pb-8 xl:pb-16">
      <div className="xl:gap-x-18  flex items-center justify-center gap-x-4   bg-[url('/category-bg.jpeg')] text-center sm:gap-x-20 ">
        <h1 className="-y-[20px] sm:-y-6 xl:-y-10 text-[28px] font-bold min-[425px]:text-[34px] md:text-[44px] lg:text-[49px] min-[1200px]:text-[55px]">
          Contact us
        </h1>
        <img
          src="/contact.svg"
          alt="contact us"
          className="w-[100px] sm:w-[120px] xl:w-[150px]  "
        />
      </div>
      <div className="mx-auto   mt-24 max-w-[1170px]">
        <div className="mx-auto   grid justify-items-center gap-y-12 text-center lg:grid-cols-3">
          <div className="relative w-[90%] max-w-[481px] bg-[#ecf4fa] py-8  shadow-sm shadow-[#BAB7BC] ">
            <div className="absolute  left-[45%] top-[-30px] rounded-full bg-white p-2 shadow-md shadow-[#BAB7BC] ">
              <CiLocationOn color="#da431d " size={35} />
            </div>
            <div className="mt-4">
              <h2 className="mb-3  text-[18px] font-bold">Address</h2>
              <div className=" grid space-y-1 text-gray-500 ">
                <p className="">California, USA - 825 Wilshire Blvd </p>
                <p className="">Addis Ababa, Ethiopia </p>
                <p className="">Canada - Soderestore 26th Ave Suite</p>
              </div>
            </div>
          </div>
          <div className="relative w-[90%] max-w-[481px] bg-[#ecf4fa] py-8  shadow-sm shadow-[#BAB7BC] ">
            <div className="absolute  left-[45%] top-[-30px] rounded-full bg-white p-2 shadow-md shadow-[#BAB7BC] ">
              <MdOutlineMail color="#da431d " size={35} />
            </div>
            <div className="mt-4">
              <h2 className="mb-2  text-[18px] font-bold">Contact</h2>
              <div className="grid space-y-1 text-gray-500">
                <a href="tel:+251953988777" className="hover:text-black">
                  +251953988777
                </a>

                <a href="tel:+1310 570 9291" className="hover:text-black">
                  +13105709291
                </a>
              </div>
            </div>
          </div>
          <div className="relative w-[90%] max-w-[481px] bg-[#ecf4fa] py-8  shadow-sm shadow-[#BAB7BC] ">
            <div className="absolute  left-[45%] top-[-30px] rounded-full bg-white p-2 shadow-md shadow-[#BAB7BC] ">
              <IoCallOutline color="#da431d " size={35} />
            </div>
            <div className="mt-4">
              <h2 className="mb-2  text-[18px] font-bold">Email</h2>
              <div className="grid space-y-1 text-gray-500">
                <a
                  href="mailto: info@soderestore.com"
                  className="hover:text-black"
                >
                  info@soderestore.com
                </a>

                <a
                  href="mailto:raklovetocode@gmail.com"
                  className="hover:text-black"
                >
                  raklovetocode@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-16   ">
        <h1 className=" sm:-y-6 xl:-y-10 text-center text-[28px] font-bold text-[#2178ac] min-[425px]:text-[34px] md:text-[44px] lg:text-[49px] min-[1200px]:text-[55px]">
          Location
        </h1>
        <div className="mx-auto   grid  max-w-[550px] items-center  gap-x-10 gap-y-16 px-4 sm:max-w-[640px] lg:max-w-[1170px]  lg:grid-cols-3 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.82055951899!2d-118.49659652351468!3d34.02281667316809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4c90c6e871f%3A0x5d22a701b028ebd6!2s825%20Wilshire%20Blvd%20%23527%2C%20Santa%20Monica%2C%20CA%2090401%2C%20USA!5e0!3m2!1sen!2set!4v1711373062945!5m2!1sen!2set"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="  -1 mt-8 aspect-[4/3] w-full  md:col-span-2 "
          ></iframe>

          <div className="">
            <h1 className="font-semibold">
              When you order from any country, we ship products from the nearest
              country for your shipping address. We have distribution centers in
              the following cities.
            </h1>
            <div className=" mt-4 space-y-4">
              <p className=" text-[15px] text-gray-500  ">
                Addis Ababa, Ethiopia
              </p>
              <p className=" text-[15px] text-gray-500  ">
                California, USA - 825 Wilshire Blvd #527, Santa Monica CA 90401
                USA
              </p>
              <p className=" text-[15px] text-gray-500  ">
                Canada - Soderestore 214 - 19138 26th Ave Suite #N280206 Surrey,
                BC, V3Z 3V7 Canada
              </p>
              <p className=" text-[15px] text-gray-500  ">
                Germany - SodereStore Suite 30876097, Shop2Ship, Wahlerstrasse
                18a, 40472, Duesseldorf, NRW, Germany
              </p>
              <p className=" text-[15px] text-gray-500  ">
                UK - Soderestore Girum Assefa 68 Tanners Drive Suite #D280206
                Blakelands, MK, MK14 5BP United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex flex-col items-center justify-center gap-x-8 gap-y-8 p-12 sm:flex-row ">
        <h1 className="text-center text-[24px] font-semibold text-[#2178ac] ">
          Connect with social media
        </h1>
        <div className="mx-10 hidden h-[1px] w-[200px] translate-y-1 bg-gray-300 lg:block"></div>
        <div className="flex justify-center gap-x-10  ">
          <a href="https://www.facebook.com/SodereEthiopia/" className="">
            <FaFacebookF size={22} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCLBOQWY0d5MQvRlAMCcrLQg"
            className=""
          >
            <FaYoutube size={22} />
          </a>
          <a href="https://t.me/soderetube" className="">
            <FaTelegramPlane size={22} />
          </a>
          <a href="https://www.instagram.com/sodereethiopia" className="">
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
