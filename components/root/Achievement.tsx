import React from "react";
import { TbFileCertificate } from "react-icons/tb";
import { RiLiveLine } from "react-icons/ri";
import { BsFiletypePdf } from "react-icons/bs";

const Achievement = () => {
  let achieve = [
    {
      icon: <TbFileCertificate />,
      title: "Government Certificate",
    },
    {
      icon: <RiLiveLine />,
      title: "Inter active Live class",
    },
    {
      icon: <BsFiletypePdf />,
      title: "PDF notes of Each Class",
    },
  ];
  return (
    <div className="bg-slate-100 md:py-[100px] md:px-[10%]">
      <h1 className="text-center text-[1.2rem] my-4 uppercase tracking-[5px]">
        we will provide
      </h1>
      <div className="flex items-center justify-evenly md:flex-row flex-col m-3 gap-4 md:m-0 ">
        {achieve.map((item) => (
          <div className="w-full md:w-[30%] md:min-h-[300px] py-10 main_bg_color p-6 rounded-md flex_center flex-col gap-5">
            <div className="text-[3rem]">{item.icon}</div>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
