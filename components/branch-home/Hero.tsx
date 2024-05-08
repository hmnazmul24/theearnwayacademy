import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

import { FaAnglesDown, FaFacebookF } from "react-icons/fa6";
import { BiLogInCircle } from "react-icons/bi";
import Link from "next/link";
import { TbBrandFacebook, TbBrandYoutube } from "react-icons/tb";
import { RiPhoneLine, RiTiktokLine } from "react-icons/ri";
const Hero = () => {
  return (
    <div className="min-h-[68vh] md:min-h-screen bg-white md:rounded-md  flex items-start justify-end md:justify-center relative overflow-hidden">
      <div
        className="z-20 text-center w-full pb-5 md:pb-11 md:py-11  "
        id="hero_box"
      >
        <div className="h-[70px] w-full flex items-center justify-end md:hidden bg-[#ff000086]">
          <ul className="  flex items-start md:justify-end mr-2 gap-2 ">
            <Link
              href={
                "https://www.tiktok.com/@the.earn.way.acad?_t=8i0ujqgKcRV&_r=1"
              }
              target="_blank"
            >
              <li className="bg-green-700 cursor-pointer rounded-full p-2 icon_color">
                <RiPhoneLine className="text-[white]" />
              </li>
            </Link>
            <Link
              href={"https://www.facebook.com/the.earn.way?mibextid=ZbWKwL"}
              target="_blank"
            >
              <li className="cursor-pointer p-2  rounded-full bg-blue-600 icon_color">
                <TbBrandFacebook className="text-[white]" />
              </li>
            </Link>
            <Link
              href={"https://www.youtube.com/@TheEarnWayAcademy"}
              target="_blank"
            >
              <li className="bg-red-800 cursor-pointer rounded-full p-2 icon_color">
                <TbBrandYoutube className="text-white" />
              </li>
            </Link>
            <Link
              href={
                "https://www.tiktok.com/@the.earn.way.acad?_t=8i0ujqgKcRV&_r=1"
              }
              target="_blank"
            >
              <li className="bg-black cursor-pointer rounded-full p-2 icon_color">
                <RiTiktokLine className="text-white" />
              </li>
            </Link>
          </ul>
        </div>
        <div className=" lg:flex items-center justify-center gap-4 ">
          {/* <span>ডিজিটাল</span> */}
          <span className="text-[2.5rem] md:text-[3rem] text-[#a82e2e] font-bold bangla_font">
            যুব উন্নয়ন
          </span>{" "}
          <span className="text-[1.3rem] lg:text-[1.5rem]  bangla_font">
            আইটি নেটওয়ার্কের
          </span>
        </div>
        <div className="lg:flex items-center justify-center gap-4  bangla_font">
          আওতাধীন{" "}
          <span className="text-[1.3rem] font-bold text-[#121212] lg:text-[2.5rem]">
            The Earn Way Academy
          </span>
          <br className="lg:hidden  bangla_font" />
          প্রদান করছে কম্পিউটার প্রশিক্ষণ কেন্দ্র খোলার অনুমতি
        </div>
        <div className="flex items-center flex-col justify-center">
          <Link href={"/branch-apply"}>
            {" "}
            <Button
              variant={"outline"}
              className="bg-[black] mt-5 hover:bg-[#207485] text-[white] shadow-md transition-all"
            >
              Apply Branch <BiLogInCircle className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute top-[400px] z-30 self-center mx-7 animate-bounce">
        <Link href={"#owner"} className="p-3">
          <FaAnglesDown />
        </Link>
      </div>
      <Image
        src={"/digital-youth.jpg"}
        height={1000}
        width={1000}
        alt="digital-youth"
        className="w-full  absolute  opacity-40 z-0 min-w-[1000px]"
      />
    </div>
  );
};

export default Hero;
