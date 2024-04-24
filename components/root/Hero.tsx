import React from "react";
import { Button } from "../ui/button";
import { FaRegFileWord } from "react-icons/fa";
import { FaRegFileExcel } from "react-icons/fa6";
import { FaRegFilePowerpoint } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import Link from "next/link";

const Hero = () => {
  const skills = [
    { skill: "Word", icon: <FaRegFileWord />, color: "blue" },
    { skill: "Excel", icon: <FaRegFileExcel />, color: "green" },
    { skill: "PowerPoint", icon: <FaRegFilePowerpoint />, color: "orange" },
    { skill: "Email Writing", icon: <MdOutlineMarkEmailRead />, color: "red" },
    {
      skill: "Banner, Poster, and Business Card Designing",
      icon: <FaRegAddressCard />,
      color: "purple",
    },
  ];
  return (
    <div className="min-h-[90vh] bg-slate-100 flex-col gap-5 flex_center">
      <h1 className=" text-[1.6rem] md:text-[3rem] font-bold p-2 text-center">
        Microsoft Office Complete Live Coures
      </h1>
      <div className="flex_center flex-col md:flex-row w-full">
        <div className=" w-full md:w-1/2 flex items-center md:items-end flex-col">
          {" "}
          <img
            src="/office-logo.png"
            alt="office-logo"
            className=" w-[90%] md:w-[80%]"
          />
          <Link href={"/course/placeorder"}>
            <Button className="main_bg_color p-6 tracking-[2px] rounded-[50px] text-[1.1rem] md:text-[1.3rem] shadow-sm shadow-[#f5d170] text-[white] md:mr-[70px] mb-10">
              Register Now
            </Button>
          </Link>
        </div>
        <div className=" w-full md:w-1/2 p-4">
          <p className="text-[1.1rem] md:text-[1.1rem]">
            The class will start on April{" "}
            <span className="text-[tomato] text-[1.3rem]">30th</span> and will
            be conducted via Zoom. Upon completion of the course, you will
            master skills such as..
          </p>
          <ul>
            {skills.map((item) => (
              <li
                key={item.skill}
                className="my-1  md:text-[0.9rem] text-[0.7rem] flex items-center justify-start gap-3"
              >
                <span style={{ color: item.color }}>{item.icon}</span>
                <span>{item.skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
