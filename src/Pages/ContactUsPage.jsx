import React, { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
const ContactUsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
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
    </div>
  );
};

export default ContactUsPage;
