import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "@/Components/ScrollToTop";
import { FaArrowLeftLong } from "react-icons/fa6";
const PrivacyPage = () => {
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
          Privacy Policy
        </h1>
      </div>
      <div className="mx-auto mt-8  ">
        <h2 className="font-semibold text-[#2178ac]">OVERVIEW </h2>
        <div className=" float-right ml-8 hidden w-[240px]  sm:block  md:w-[290px]">
          <img
            src="/undraw_privacy.svg"
            alt="undraw_privacy illustration"
            className="w-full "
          />
        </div>
        <div className="mt-3 space-y-3">
          <p className="text-[15px] text-gray-500">
            Your privacy is very important to us. Our Privacy Policy spells out
            SodereStore.com’s commitment to respecting the privacy of the
            members and visitors to our site. We reserve the right to change
            this policy at any time, which we'll do through online posting or an
            email message. We are very careful with what we do with your
            information. This Privacy Policy describes how our website collects
            and uses the personal information you provide to us on our website:
            SodereStore.com. It also describes the choices available to you
            regarding our use of your personal information and how you can
            access and update this information.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-8 space-y-8">
        <div className=" ">
          <h2 className="font-semibold text-[#2178ac]">
            Collection and Use of Personal Information
          </h2>
          <p className="mt-3 text-[15px] text-gray-500">
            We collect personal information from you to provide an efficient,
            meaningful and customized experience for you on SodereStore.com's
            website.
          </p>
          <p className="mt-3 text-[15px] font-semibold ">
            We collect the following personal information from you:
          </p>
          <ul className="ml-6 mt-3 list-outside list-disc space-y-2 text-[14px] text-gray-500">
            <li className="">
              contact Information such as name, email address, mailing address
              and phone number
            </li>
            <li className="">
              Billing Information such as credit card number and billing address
            </li>
            <li className="">
              Unique Identifiers such as user name, account number and password
            </li>
            <li className="">
              Email addresses of friends or other people you would like us to
              contact
            </li>
            <li className="">
              When you browse our store, we also automatically receive your
              computer’s internet protocol (IP) address in order to provide us
              with information that helps us learn about your browser and
              operating system.
            </li>
          </ul>
        </div>
        <div className=" ">
          <h2 className="font-semibold text-[#2178ac]">
            We use this information to
          </h2>
          <ul className="ml-6 mt-3 list-outside list-disc space-y-2 text-[14px] text-gray-500">
            <li className="">Fulfill your order</li>
            <li className="">Send you an order confirmation</li>
            <li className="">
              Uni Assess the needs of your business to determine suitable
              products
            </li>
            <li className="">Respond to customer service requests</li>
            <li className="">Administer your account</li>
            <li className="">Send you a newsletter</li>
            <li className="">Send you marketing communications</li>
            <li className="">Respond to your questions and concerns</li>
            <li className="">Improve our website and marketing efforts</li>
            <li className="">Display content based upon your interests</li>
          </ul>
        </div>

        <div className=" ">
          <h2 className="font-semibold text-[#2178ac]">Consent</h2>
          <ul className="ml-6 mt-3 list-outside list-disc space-y-2 text-[14px] text-gray-500">
            <li className="">
              When you provide us with personal information to complete a
              transaction, verify your credit card, place an order, arrange for
              a delivery or return a purchase, we imply that you consent to our
              collecting it and using it for that specific reason only.
            </li>
            <li className="">
              If we ask for your personal information for a secondary reason,
              like marketing, we will either ask you directly for your expressed
              consent, or provide you with an opportunity to say no.
            </li>
            <li className="">
              To review and update your personal information to ensure it is
              accurate, contact us at:
              <a
                href="mailto:info@soderestore.com"
                className="font-semibold text-black"
              >
                info@soderestore.com
              </a>
            </li>
          </ul>
        </div>
        <div className=" ">
          <h2 className="mb-4 font-semibold text-[#2178ac]">Payment</h2>

          <p className="mt-3 text-[15px] text-gray-500">
            If you choose a direct payment gateway to complete your purchase,
            <div className=" float-right ml-8  hidden w-[240px]  sm:block  md:w-[290px]">
              <img
                src="/undraw_online_payments.svg"
                alt="undraw_online_payments illustration"
                className="w-full "
              />
            </div>
            the respective credit card processing company (Square, Stripe,
            PayPal) that stores your credit card data. It is encrypted through
            the Payment Card Industry Data Security Standard (PCI-DSS). Your
            purchase transaction data is stored only as long as is necessary to
            complete your purchase transaction. After that is complete, your
            purchase transaction information is deleted.
          </p>
          <p className="mt-3 text-[15px] text-gray-500">
            All direct payment gateways adhere to the standards set by PCI-DSS
            as managed by the PCI Security Standards Council, which is a joint
            effort of brands like Visa, MasterCard, American Express and
            Discover.
          </p>
          <p className="mt-3 text-[15px] text-gray-500">
            PCI-DSS requirements help ensure the secure handling of credit card
            information by our store and its service providers.
          </p>
          <p className="mt-3 text-[15px] text-gray-500">
            For more insight, you may also want to read the credit card
            processing company’s Terms of Service.
          </p>
        </div>

        <div className=" ">
          <h2 className="mb-4 font-semibold text-[#2178ac]">Security</h2>

          <p className="mt-3 text-[15px] text-gray-500">
            The security of your personal information is important to us. When
            you enter sensitive information (such as a credit card number) on
            our order forms, we encrypt the transmission of that information
            using secure socket layer technology (SSL).
          </p>
          <p className="mt-3 text-[15px] text-gray-500">
            We follow generally accepted industry standards to protect the
            personal information submitted to us, both during transmission and
            once we receive it. However, no method of transmission over the
            Internet, or method of electronic storage, is 100% secure.
            Therefore, we cannot guarantee its absolute security.
          </p>
          <p className="mt-3 text-[15px] text-gray-500">
            If you have any questions about security on our site, you can
            contact us at:{"  "}
            <a
              href="mailto:info@soderestore.com"
              className="font-semibold text-black"
            >
              info@soderestore.com
            </a>
          </p>
          <p className="mt-3 text-[15px] text-gray-500">
            For more insight, you may also want to read the credit card
            processing company’s Terms of Service.
          </p>
        </div>
        <div className=" ">
          <h2 className="font-semibold text-[#2178ac]">
            Notification of Privacy Statement Changes
          </h2>
          <p className="mt-3 text-[15px] text-gray-500">
            We may update this Privacy Policy to reflect changes to our
            information practices. If we make any material changes, we will
            notify you by email (sent to the email address specified in your
            account) or by means of a notice on this Site prior to the change
            becoming effective. We encourage you to periodically review this
            policy for the latest information on our privacy practices.
          </p>
        </div>
        <button
          class="  group relative mb-2 me-2 ml-8 inline-flex items-center justify-center overflow-hidden rounded-lg  bg-[#2178ac] p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300   dark:text-white"
          onClick={handlePrint}
        >
          <span class="relative rounded-md bg-white px-10 py-2.5 font-bold transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            Print
          </span>
        </button>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default PrivacyPage;
