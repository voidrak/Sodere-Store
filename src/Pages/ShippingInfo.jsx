import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "@/Components/ScrollToTop";
import { FaArrowLeftLong } from "react-icons/fa6";
const ShippingInfo = () => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="mx-auto mb-16 max-w-[1170px] px-4">
      <div className="mt-8 flex items-center gap-x-3 text-left  text-[#2178ac]">
        <Link to="/">
          <FaArrowLeftLong size={30} />
        </Link>
        <h1 className="text-[22px] font-bold min-[425px]:text-[34px]   ">
          Shipping & Payment Info
        </h1>
      </div>
      <div className=" float-right ml-8 hidden w-[240px]  sm:block  md:w-[290px]">
        <img
          src="/cash-on-delivery-payment.svg"
          alt="undraw_privacy illustration"
          className="w-full "
        />
      </div>
      <div className="mx-auto mt-8  ">
        <h2 className="font-semibold text-[#2178ac]">OVERVIEW </h2>
        <div className="mt-3 space-y-3">
          <p className="text-[15px] text-gray-500">
            Customers who don't have a credit card, please pay in birr in
            Ethiopia via Amole, HeloCash, MBirr or deposit directly on the bank
            using our account number. SodereStore SodereStore.com works for
            those who can pay by credit card. For those who live abroad and in
            Ethiopia, and those who do not have a credit card, use Birr.
            Customers who live outside Ethiopia can deposit the payment Birr in
            Ethiopia
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 ">
        <div className=" ">
          <h2 className="font-semibold text-[#2178ac]">
            Customers who live Ethiopia
          </h2>

          <div className=" mx-auto my-8 grid  grid-cols-2 gap-y-8 px-4 text-[14px] sm:grid-cols-3 ">
            <div className="flex flex-col  justify-between">
              <div className="w-[100px] ">
                <img className="w-full" src="/Dashen Bank Logo.svg" alt="" />
              </div>
              <h1 className="font-bold">Dashen Bank: 0068100816011</h1>
            </div>
            <div className="flex flex-col  justify-between">
              <div className="w-[100px] ">
                <img
                  className="w-full"
                  src="Commercial Bank of Ethiopia Logo.svg"
                  alt=""
                />
              </div>
              <h1 className="font-bold"> Bank of Ethiopia: 1000286703767</h1>
            </div>
            <div className="flex flex-col  justify-between">
              <div className="w-[100px] ">
                <img className="w-full" src="/Amole Logo.svg" alt="" />
              </div>
              <h1 className="font-bold">Amole: 0953988777</h1>
            </div>
            <div className="flex flex-col  justify-between">
              <div className="w-[100px] ">
                <img
                  className="h w-"
                  src="CBE Birr ( No background ) Logo.svg"
                  alt=""
                />
              </div>
              <h1 className="font-bold">CBE Birr: 130902</h1>
            </div>
            <div className="flex flex-col  justify-between">
              <div className="w-[100px] ">
                <img
                  className="w-full"
                  src="Awash International Bank ( No text ) Logo.svg"
                  alt=""
                />
              </div>
              <h1 className="font-bold"> Awash Bank: 01320238792500</h1>
            </div>
          </div>
        </div>

        <div className=" ">
          <h2 className="mb-4 font-semibold text-[#2178ac]">Payment</h2>

          <div className="mt-3 text-[15px] text-gray-500">
            If you live abroad, you can send money to Ethiopia by depositing it
            <div className=" float-right ml-8  hidden w-[240px]  sm:block  md:w-[290px]">
              <img
                src="/undraw_delivery_truck_vt6p.svg"
                alt="undraw_online_payments illustration"
                className="w-full "
              />
            </div>
            in your Sodere Bank account or having someone living in Ethiopia
            deposit it. We will send you a receipt by email. Shipping service
            fee from USA/Europe to Ethiopia If you have your own credit card
          </div>
          <p className="mt-3 text-[15px] text-gray-500">
            Order the product from websites in the US and Europe. When asked for
            a shipping address, if it is an American website, enter the address
            of the Soderen postal service in the United States. If it's a
            European site, enter the address of the Soderre postal service in
            Austria. Use our U.S., Canada, UK or Germany warehouse shipping
            address when you check out on the website. Enter recipient address
            and pay the shipping fee on SodereStore. It will be shipped to
            Ethiopia with goods. When we receive the product, we will ship it to
            Ethiopia. When the product arrives in Ethiopia, the product can be
            picked up from Sodere office by paying the customs fee. We will pay
            for customs and wait for the recipient to collect the item.
          </p>
          <p className="mt-3 text-[15px] text-gray-500">
            Those who do not have a credit card (if the item is purchased with
            Sodre's credit card) Take your item from Amazon, Ebay and any
            website in America or Europe you want and send the phone number of
            Sodre company via WhatsApp, Telegram, Viber, Facebook or email. The
            price of the item + 10% of the price of the item multiplied by 40
            Birr For example, if the item is $100, $100 + 10% (100) = $110. $110
            x 40 birr = 4400 birr On top of that, paying the shipping fee When
            the goods arrive in Ethiopia, customs can collect the goods from
            Sodere office by paying the fee.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default ShippingInfo;
