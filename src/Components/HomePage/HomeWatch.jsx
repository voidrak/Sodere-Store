import React from "react";
import { Link } from "react-router-dom";
const HomeWatch = () => {
  return (
    <div className=" mx-auto my-[5rem] grid w-[90%]  min-[425px]:w-[85%] sm:w-[75%] min-[992px]:w-[90%] ">
      <div className=" mx-auto grid gap-x-8 min-[992px]:w-[100%] min-[992px]:grid-cols-2">
        <div className="group relative m-auto  min-[992px]:w-[90%] min-[992px]:translate-x-[3rem] min-[1700px]:translate-x-[5rem]">
          <img src="./home_watch.webp" alt="" className="mx-auto" />

          <Link to="/R7gcj1">
            <button className=" absolute left-[50%] top-[50%] mt-1 hidden h-11 w-[150px] animate-bounce rounded-sm  bg-black font-semibold text-white group-hover:block">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="mx-auto  mt-8 grid  max-w-[520px] place-content-center px-8">
          <div className="grid text-[22px] font-extrabold  min-[992px]:text-[28px]">
            <h1 className="">Look Good,</h1>
            <h1 className="">Live Better</h1>
          </div>

          <div className="my-8 space-y-4 text-[11px] min-[992px]:text-[12px]">
            <p>
              A 42mm Titanium case, black silicone band, and 1.3" circular LCD
              display make a premium timepiece with all the benefits of state
              of-the-art wearable technology.
            </p>
            <p>
              Enhance your lifestyle with the Apple Watch Ultra GPS. With its
              sleek design and advanced features, staying connected and active
              has never been easier. Look good, live better with the ultimate
              companion for your everyday adventures.
            </p>
          </div>

          <div className="gap grid grid-cols-2 gap-y-8 md:grid-cols-4  ">
            <div className="grid  place-content-center md:place-content-start min-[992px]:p-4">
              <img src="./Titanium.png" alt="" className=" mx-auto" />
              <div className="mt-4">
                <p className="text-center text-[12px] min-[992px]:text-[14px]">
                  Titanium
                </p>
                <p className="text-center text-[12px] min-[992px]:text-[14px]">
                  Case
                </p>
              </div>
            </div>
            <div className="grid  place-content-center md:place-content-start min-[992px]:p-4">
              <img src="./Tempered.webp" alt="" className=" mx-auto" />
              <div className="mt-4">
                <p className="text-center text-[12px] min-[992px]:text-[14px]">
                  Tempered
                </p>
                <p className="text-center text-[12px] min-[992px]:text-[14px]">
                  Glass
                </p>
              </div>
            </div>
            <div className="grid  place-content-center md:place-content-start min-[992px]:p-4">
              <img src="./Weight.webp" alt="" className=" mx-auto" />
              <div className="mt-4">
                <p className="text-center text-[12px] min-[992px]:text-[14px]">
                  Weight
                </p>
                <p className="text-center text-[12px] min-[992px]:text-[14px]">
                  Under 51.5g
                </p>
              </div>
            </div>
            <div className="grid  place-content-center md:place-content-start min-[992px]:p-4">
              <img src="./Water.webp" alt="" className=" mx-auto" />
              <div className="mt-4">
                <p className="text-center text-[12px] min-[992px]:text-[14px]">
                  Water
                </p>
                <p className="text-center text-[12px] min-[992px]:text-[14px]">
                  Resistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWatch;
