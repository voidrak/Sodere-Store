import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const ProductDesc = ({ selectedProduct }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [ActiveTabElement, setActiveTabElement] = useState(null);

  const handleActive = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    let tabElement;
    switch (activeTab) {
      case "description":
        {
          tabElement = (
            <div className="   ">
              <p className="">
                Discover our newest product, crafted with precision and designed
                for your convenience. Elevate your experience with innovation at
                your fingertips. Experience quality like never before."
              </p>
              <ul className="ml-3  mt-4 list-inside list-disc space-y-2 font-light ">
                <li className="">Sleek and modern design</li>
                <li className=""> functionality for ease of use</li>
                <li className="">Durable for long-lasting performance</li>
                <li className="">Versatile features to suit your needs"</li>
              </ul>
            </div>
          );
        }
        break;
      case "additional":
        {
          tabElement = (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className=" w-[100%] text-left text-sm text-gray-500 dark:text-gray-400 ">
                <tbody>
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 text-base font-bold text-gray-900 dark:text-white"
                    >
                      Name
                    </th>
                    <td className="px-6 py-4">
                      {selectedProduct[0].itemNameEnglish}
                    </td>
                  </tr>
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 text-base font-bold text-gray-900 dark:text-white"
                    >
                      ስም
                    </th>
                    <td className="px-6 py-4">
                      {selectedProduct[0].itemNameAmharic}
                    </td>
                  </tr>
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 text-base font-bold text-gray-900 dark:text-white"
                    >
                      Rating
                    </th>
                    <td className="px-6 py-4">{selectedProduct[0].review}</td>
                  </tr>
                  <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 text-base font-bold text-gray-900 dark:text-white"
                    >
                      Category
                    </th>
                    <td className="px-6 py-4">{selectedProduct[0].category}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        }
        break;
      case "shipping":
        {
          tabElement = (
            <div className="mt-2">
              <h1 className=" text-[18px] font-semibold ">Returns policy</h1>
              <ul className="ml-3  mt-4 list-inside list-disc  space-y-2 text-pretty font-light ">
                <li className="font- relative font-sans text-[15px]  ">
                  Dispatch: Within 24 Hours
                </li>
                <li className="font- relative font-sans text-[15px]  ">
                  Free shipping across all products on a minimum purchase of
                  $50.
                </li>
                <li className="font- relative font-sans text-[15px] before:absolute ">
                  International delivery time - 7-10 business days
                </li>
                <li className="font- relative font-sans text-[15px]  ">
                  Cash on delivery might be available
                </li>
                <li className="font- relative font-sans text-[15px]  ">
                  Easy 30 days returns and exchanges
                </li>
              </ul>
              <h1 className="mt-5 text-[18px] font-semibold ">
                Returns policy
              </h1>
              <p className="mt-3 text-justify">
                You may return most new, unopened items within 30 days of
                delivery for a full refund. We'll also pay the return shipping
                costs if the return is a result of our error (you received an
                incorrect or defective item, etc.).
              </p>
              <p className="mt-3 text-justify">
                You should expect to receive your refund within four weeks of
                giving your package to the return shipper, however, in many
                cases you will receive a refund more quickly. This time period
                includes the transit time for us to receive your return from the
                shipper (5 to 10 business days), the time it takes us to process
                your return once we receive it (3 to 5 business days), and the
                time it takes your bank to process our refund request (5 to 10
                business days).
              </p>
              <p className="mt-3 text-justify">
                If you need to return an item, simply login to your account,
                view the order using the "Complete Orders" link under the My
                Account menu and click the Return Item(s) button. We'll notify
                you via e-mail of your refund once we've received and processed
                the returned item.
              </p>
            </div>
          );
        }
        break;
      case "product": {
        tabElement = (
          <div className="flex h-[200px] flex-col items-center justify-center gap-y-4 ">
            <p>No review yet</p>
            <button
              type="button"
              onClick={() => {
                toast.error("review is under construction");
              }}
              className="mb-2 me-2 rounded-lg border border-gray-200 bg-black px-5 py-2.5 text-sm font-medium text-white hover:scale-95   focus:outline-none focus:ring-4 focus:ring-gray-100    "
            >
              WRITE A REVIEW
            </button>
          </div>
        );
      }
    }
    setActiveTabElement(tabElement);
  }, [activeTab]);

  return (
    <div className="mx-auto  mb-48 mt-16 max-w-[1280px] min-[1200px]:max-w-[1024px]">
      <div className="  mx-auto px-6  min-[576px]:w-[80%] md:hidden min-[931px]:max-w-[837px]  ">
        <Accordion type="single" collapsible className="">
          <AccordionItem value="item-1">
            <AccordionTrigger>Description</AccordionTrigger>
            <AccordionContent>
              <p className="">
                Discover our newest product, crafted with precision and designed
                for your convenience. Elevate your experience with innovation at
                your fingertips. Experience quality like never before."!
              </p>
              <ul className="ml-3  mt-4 list-inside list-disc space-y-2 font-light ">
                <li className="">Sleek and modern design</li>
                <li className=""> functionality for ease of use</li>
                <li className="">Durable for long-lasting performance</li>
                <li className="">Versatile features to suit your needs"</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Additional Information</AccordionTrigger>
            <AccordionContent>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className=" w-[100%] text-left text-sm text-gray-500 dark:text-gray-400 ">
                  <tbody>
                    <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 text-base font-bold text-gray-900 dark:text-white"
                      >
                        Name
                      </th>
                      <td className="px-6 py-4">
                        {selectedProduct[0].itemNameEnglish}
                      </td>
                    </tr>
                    <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 text-base font-bold text-gray-900 dark:text-white"
                      >
                        ስም
                      </th>
                      <td className="px-6 py-4">
                        {selectedProduct[0].itemNameAmharic}
                      </td>
                    </tr>
                    <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 text-base font-bold text-gray-900 dark:text-white"
                      >
                        Rating
                      </th>
                      <td className="px-6 py-4">{selectedProduct[0].review}</td>
                    </tr>
                    <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 text-base font-bold text-gray-900 dark:text-white"
                      >
                        Category
                      </th>
                      <td className="px-6 py-4">
                        {selectedProduct[0].category}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Shipping & Return</AccordionTrigger>
            <AccordionContent>
              <h1 className="mt-5 text-[18px] font-semibold ">
                Returns policy
              </h1>
              <ul className="ml-3  mt-4 list-outside list-disc  space-y-2 text-pretty font-light ">
                <li className="font- relative font-sans text-[15px]  ">
                  Dispatch: Within 24 Hours
                </li>
                <li className="font- relative font-sans text-[15px] before:absolute before:left-[-12px] before:top-[6px] before:h-[7px] before:w-[7px] before:rounded-full  before:bg-gray-700 ">
                  Free shipping across all products on a minimum purchase of
                  $50.
                </li>
                <li className="font- relative font-sans text-[15px] before:absolute before:left-[-12px] before:top-[6px] before:h-[7px] before:w-[7px]  before:rounded-full  before:bg-gray-700">
                  International delivery time - 7-10 business days
                </li>
                <li className="font- relative font-sans text-[15px] before:absolute before:left-[-12px] before:top-[6px] before:h-[7px] before:w-[7px] before:rounded-full  before:bg-gray-700 ">
                  Cash on delivery might be available
                </li>
                <li className="font- relative font-sans text-[15px] before:absolute before:left-[-12px] before:top-[6px] before:h-[7px] before:w-[7px] before:rounded-full before:bg-gray-700  ">
                  Easy 30 days returns and exchanges
                </li>
              </ul>
              <h1 className="mt-5 text-[18px] font-semibold ">
                Returns policy
              </h1>
              <p className="mt-3 text-justify">
                You may return most new, unopened items within 30 days of
                delivery for a full refund. We'll also pay the return shipping
                costs if the return is a result of our error (you received an
                incorrect or defective item, etc.).
              </p>
              <p className="mt-3 text-justify">
                You should expect to receive your refund within four weeks of
                giving your package to the return shipper, however, in many
                cases you will receive a refund more quickly. This time period
                includes the transit time for us to receive your return from the
                shipper (5 to 10 business days), the time it takes us to process
                your return once we receive it (3 to 5 business days), and the
                time it takes your bank to process our refund request (5 to 10
                business days).
              </p>
              <p className="mt-3 text-justify">
                If you need to return an item, simply login to your account,
                view the order using the "Complete Orders" link under the My
                Account menu and click the Return Item(s) button. We'll notify
                you via e-mail of your refund once we've received and processed
                the returned item.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Product Reviews</AccordionTrigger>
            <AccordionContent>
              <div className="flex h-[200px] flex-col items-center justify-center gap-y-4 ">
                <p>No review yet</p>
                <button
                  type="button"
                  onClick={() => {
                    toast.error("review is under construction");
                  }}
                  className="mb-2 me-2 rounded-lg border border-gray-200 bg-black px-5 py-2.5 text-sm font-medium text-white hover:scale-95   focus:outline-none focus:ring-4 focus:ring-gray-100    "
                >
                  WRITE A REVIEW
                </button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mx-auto w-full border-b border-gray-200 px-2 text-center text-sm font-medium text-gray-500      dark:border-gray-700  dark:text-gray-400">
        <ul className="-mb-px flex flex-nowrap justify-between">
          <li
            className={` me-2 inline-block cursor-pointer text-nowrap rounded-t-lg border-b-2 px-4 py-2 font-bold  dark:hover:text-gray-300 ${activeTab === "description" && "border-blue-600  text-blue-600 dark:border-blue-500 dark:text-blue-500"}`}
            onClick={() => {
              handleActive("description");
            }}
          >
            Description
          </li>
          <li
            className={` me-2 inline-block cursor-pointer text-nowrap rounded-t-lg border-b-2 px-4 py-2 font-bold  dark:hover:text-gray-300 ${activeTab === "additional" && "border-blue-600  text-blue-600 dark:border-blue-500 dark:text-blue-500"}`}
            onClick={() => {
              handleActive("additional");
            }}
          >
            Additional Information
          </li>
          <li
            className={`me-2 inline-block cursor-pointer text-nowrap rounded-t-lg border-b-2 px-4 py-2 font-bold  dark:hover:text-gray-300 ${activeTab === "shipping" && "border-blue-600  text-blue-600 dark:border-blue-500 dark:text-blue-500"}`}
            onClick={() => {
              handleActive("shipping");
            }}
          >
            Shipping & Return
          </li>
          <li
            className={`me-2 inline-block cursor-pointer text-nowrap rounded-t-lg border-b-2 px-4 py-2 font-bold  dark:hover:text-gray-300 ${activeTab === "product" && "border-blue-600  text-blue-600 dark:border-blue-500 dark:text-blue-500"}`}
            onClick={() => {
              handleActive("product");
            }}
          >
            Product Reviews
          </li>
        </ul>
        <div className="ml-8 mt-4 py-8 text-left">{ActiveTabElement}</div>
      </div>
    </div>
  );
};

export default ProductDesc;
