"use client";

import RegistrationCard from "@/components/shared/RegistrationCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import * as htmlToImage from "html-to-image";

const page = () => {
  const furtherInfo = [
    { title: "You will be added in Whatsapp Group." },
    { title: "You will get a link in whatsapp when class start." },
    { title: "You will click the link and landed the live class." },
    { title: "You will ask question during live class." },
  ];

  const downloadImg = () => {
    htmlToImage
      .toJpeg(document.getElementById("downloadImg") as HTMLDivElement, {
        quality: 0.95,
      })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };
  return (
    <div className="w-full  p-4 md:w-[80%] m-auto">
      <div className="mb-5">
        <h1 className="text-[1.5rem] py-3 border-b-[1px] block md:inline border-b-[#3f99ca6c]">
          <span className="text-[green] font-bold">Congratulation! </span> You
          have bought Microsoft Office Live Courese
        </h1>
      </div>
      <h1 className="my-3">Your Registration Card</h1>
      <div className="border-[1px] border-[#f5f5f5] rounded-md">
        <RegistrationCard />

        <div className="flex_center justify-start">
          <Button
            className="rounded-md my-2  bg-green-700 text-white py-2 px-4 "
            onClick={downloadImg}
          >
            Download <FaDownload className="ml-3" />
          </Button>
        </div>
      </div>
      <h1 className="border-b-[1px] mt-[50px] inline border-b-[#005f9f8c] my-4 text-[1.1rem] md:text-[1.3rem]">
        How you will continue the course?
      </h1>
      <ul className="md:mb-[100px]">
        {furtherInfo.map((item, i) => (
          <li
            key={item.title}
            className="flex text-[0.8rem] my-2 md:my-4 md:text-[1.1rem] items-center justify-start "
          >
            <div className="p-1 mr-3 bg-[#cccccc] text-[#0800ff] flex_center h-[30px] w-[30px] box-border rounded-[50px]">
              {i + 1}
            </div>
            <p>{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
