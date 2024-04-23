import Link from "next/link";
import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { TbBrandYoutube } from "react-icons/tb";
import { RiTiktokLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="md:w-[85%] py-10  sm:px-6 text-gray-800 md:flex justify-between mx-auto">
        <div className=" p-3 md:p-5 border-r md:w-[23%] ">
          <div className="text-sm uppercase text-[1.2rem] main_color  font-bold">
            <img src="/tew.png" className="h-[25px]" alt="" />
          </div>
          <ul className="flex items-center justify-start md:justify-start mt-6 gap-3 mr-8 ">
            <li className="bg-slate-200 rounded-full p-2 main_color">
              <TbBrandFacebook />
            </li>
            <li className="bg-slate-200 rounded-full p-2 main_color">
              <TbBrandYoutube />
            </li>
            <li className="bg-slate-200 rounded-full p-2 main_color">
              <RiTiktokLine />
            </li>
          </ul>
        </div>
        <div className="p-5 md:w-[50%]  md:px-10 border-r md:text-center">
          <h3 className="font-bold text-xl main_color mb-4 ">About Us</h3>
          <p className="text-gray-500 text-sm mb-10">
            The Earn Way Academy: Your path to digital expertise. Expert
            instruction, personalized courses. Empower yourself with essential
            tech skills. Join us today
          </p>
        </div>
        <div className="p-5 md:w-[27%]">
          <div className="text-sm  main_color font-bold">Contact Us</div>
          <ul
            className="mt-6
          "
          >
            <li className="my-2 flex_center text-[0.9rem] justify-start">
              <span className="mr-2">
                <CiLocationOn />
              </span>
              <span>
                Sohidul Islam Market, 2nd floor,
                <br />
                Damurhuda,Chuadanga,BD
              </span>
            </li>
            <li className="my-2 flex justify-start items-center">
              <span className="mr-2">
                <CiPhone />
              </span>
              <span>01714044642</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-4 px-5  md:py-5 m-auto text-gray-800 text-sm flex-col items-start md:items-center border-t max-w-screen-xl">
        <div className=" md:my-5 text-[0.8rem] text-slate-700">
          © Copyright 2024. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
