"use client";
import Link from "next/link";

import Image from "next/image";
import { FaFacebook, FaLocationDot, FaPhone } from "react-icons/fa6";
import FooterHeading from "./FooterHeading";

const MainFooter = () => {
  return (
    <>
      <div
        className=" w-full main_bg_color p-4 md:p-0 md:py-6 relative"
        id="footer"
      >
        <div className="md:w-[90%] m-auto w-full flex flex-wrap items-start justify-between">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <FooterHeading heading="The Earn Way Academy" />
            <p>
              Your path to digital expertise. Expert instruction, personalized
              courses. Empower yourself with essential tech skills. Join us
              today
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <FooterHeading heading="Quick Links" />

            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>Contact</li>
              <li>
                <Link href={"/branch-login"}>Branch Login</Link>
              </li>
              <li>
                <Link href={"/courses"}>Online Courese</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <FooterHeading heading="Contact Info" />

            <ul className="">
              <li className=" flex_center text-[0.9rem] justify-start">
                <span className="mr-2">
                  <FaLocationDot className="text-[white]" />
                </span>
                <span>
                  Sohidul Islam Market, 2nd floor,
                  <br />
                  Damurhuda,Chuadanga,BD
                </span>
              </li>
              <li
                className="my-2 flex justify-start items-center cursor-pointer"
                onClick={() => window.open("tel:01880110842", "_self")}
              >
                <span className="mr-2">
                  <FaPhone className="text-[white]" />
                </span>
                <span>01880110842</span>
              </li>
              <Link
                href={"https://www.facebook.com/the.earn.way?mibextid=ZbWKwL"}
              >
                <li>
                  <span className="mr-2">
                    <FaFacebook className="text-[white]" />
                  </span>
                  <span>Our Facebook Page</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <FooterHeading heading="Payment Varified" />
            <Image
              src="/payment.png"
              alt="surjopay"
              height={600}
              width={600}
              className="w-[95%] md:w-full"
            />
          </div>
        </div>
        <div className="md:mx-[5%] mt-10 flex flex-col md:flex-row items-start justify-start gap-6">
          {/* <h1 className="">{`"It is not that we use technology, We live in technology " --- Godfrey Reggio`}</h1> */}
          <h1 className="text-[0.8rem] md:text-[1rem]">{`"At least 40% of all businesses will die in the next 10 years, if they don't figure out how to change their entire company to accomodate new technologies" --- John Chambers`}</h1>
        </div>
      </div>
      <div
        className="flex py-2
        md:py-2   bg-[#2773b1] text-sm md:items-center md:justify-center w-full"
      >
        <div className=" md:my-1 px-4 text-[0.7rem] font-bold md:text-[0.8rem]">
          © Copyright 2024. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default MainFooter;
