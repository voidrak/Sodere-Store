import ScrollToTop from "@/Components/ScrollToTop";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-[100vh]">
      <div className="mt-16">
        <div className="">
          <img src="" alt="" />
        </div>
        <div className="grid justify-items-center">
          <div className="">
            <img
              src="/sodere-logo.png"
              alt="sodere logo"
              className="w-[150px]
            sm:w-[200px] "
            />
          </div>
          <form className="">
            <div className="">
              <label htmlFor="username" className="">
                Username or email
              </label>
              <input type="text" />
            </div>
            <div className="">
              <label htmlFor="password">Password</label>
              <input type="password" className="" />
            </div>
            <p className="">Forgot password</p>

            <button
              type="button"
              class="    h-[42px] min-w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-black stroke-white px-6 py-2 align-middle text-sm font-semibold  text-white transition-all duration-300 ease-in-out hover:bg-blue-950  "
            >
              <span>Sign in</span>
            </button>
          </form>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default LoginPage;
