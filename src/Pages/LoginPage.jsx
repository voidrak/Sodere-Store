import ScrollToTop from "@/Components/ScrollToTop";
import React from "react";

const LoginPage = () => {
  return (
    <div className="mx-auto grid min-h-[100vh]  max-w-[1170px] items-center  ">
      <div className="grid-cols-2  md:grid ">
        <div className="hidden    flex-col items-center justify-center   md:flex">
          <img
            src="undraw_mobile_login.svg"
            alt="undraw_mobile_login"
            className="w-[450px]"
          />
          <h1 className="mt-8 text-[23px] font-bold text-[#2178ac]">
            Sodere Store
          </h1>
          <p className="text-gray-500">"Shop Smart, Live Well"</p>
        </div>
        <div className=" my-auto ">
          <div className="">
            <img
              src="/sodere-logo.png"
              alt="sodere logo"
              className="mx-auto w-[150px]"
            />
          </div>
          <form className="  mx-auto my-10 max-w-[375px] px-2 min-[481px]:max-w-[405px]">
            <div className="mt-4 grid">
              <label htmlFor="username" className="text-sm text-gray-500">
                Username or email
              </label>
              <input
                type="text"
                className="mt-1 rounded-sm border border-gray-300  p-1.5"
              />
            </div>
            <div className="mt-4 grid">
              <label htmlFor="password" className="text-sm text-gray-500">
                Password
              </label>
              <input
                type="password"
                className="mt-1 rounded-sm border border-gray-300  p-1.5"
              />
            </div>
            <p className="mr-2 mt-2 cursor-pointer text-right text-[#2178ac] underline underline-offset-1">
              Forgot password?
            </p>

            <button
              type="button"
              class=" mt-8  h-[42px] min-w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-black stroke-white px-6 py-2 align-middle text-sm font-semibold  text-white transition-all duration-300 ease-in-out    "
            >
              <span>Sign in</span>
            </button>
          </form>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center ">
              <span className="mx-10  h-[1px] w-[100px] translate-x-[25px]  bg-gray-400 "></span>
              <h1 className="">or</h1>
              <span className="mx-10  h-[1px] w-[100px] translate-x-[-25px]  bg-gray-400 "></span>
            </div>
            <button
              type="button"
              class="group mt-4 inline-flex h-[38px] min-w-[38px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-slate-300 bg-transparent stroke-blue-700 px-4 py-2 align-middle text-xs font-semibold text-black transition-all duration-300 ease-in-out hover:border-black hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-white disabled:stroke-slate-400 disabled:text-slate-400 disabled:hover:bg-white"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 stroke-none"
              >
                <path
                  d="M18.7511 10.1944C18.7511 9.47495 18.6915 8.94995 18.5626 8.40552H10.1797V11.6527H15.1003C15.0011 12.4597 14.4654 13.675 13.2749 14.4916L13.2582 14.6003L15.9087 16.6126L16.0924 16.6305C17.7788 15.1041 18.7511 12.8583 18.7511 10.1944Z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M10.1788 18.75C12.5895 18.75 14.6133 17.9722 16.0915 16.6305L13.274 14.4916C12.5201 15.0068 11.5081 15.3666 10.1788 15.3666C7.81773 15.3666 5.81379 13.8402 5.09944 11.7305L4.99473 11.7392L2.23868 13.8295L2.20264 13.9277C3.67087 16.786 6.68674 18.75 10.1788 18.75Z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.10014 11.7305C4.91165 11.186 4.80257 10.6027 4.80257 9.99992C4.80257 9.3971 4.91165 8.81379 5.09022 8.26935L5.08523 8.1534L2.29464 6.02954L2.20333 6.0721C1.5982 7.25823 1.25098 8.5902 1.25098 9.99992C1.25098 11.4096 1.5982 12.7415 2.20333 13.9277L5.10014 11.7305Z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M10.1789 4.63331C11.8554 4.63331 12.9864 5.34303 13.6312 5.93613L16.1511 3.525C14.6035 2.11528 12.5895 1.25 10.1789 1.25C6.68676 1.25 3.67088 3.21387 2.20264 6.07218L5.08953 8.26944C5.81381 6.15972 7.81776 4.63331 10.1789 4.63331Z"
                  fill="#EB4335"
                ></path>
              </svg>
              <span>Sign in with Google</span>
            </button>
            <div className=" mt-4 flex items-center gap-x-3 text-[15px]">
              <p className="">are you new?</p>
              <p className=" cursor-pointer text-right text-[#2178ac] underline underline-offset-1">
                Create an Account
              </p>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default LoginPage;
