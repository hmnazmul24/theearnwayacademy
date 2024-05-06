"use client";

import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { TbBrandFacebook } from "react-icons/tb";
import { TbBrandYoutube } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiTiktokLine } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import axios from "axios";
// import { useThemeContext } from "@/context/theme";
// import { StudentInfoType } from "@/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  // const { setStudent, setMessage } = useThemeContext();
  // useEffect(() => {
  //   let getInfo = async () => {
  //     try {
  //       let { data } = await axios.get("/api/student");

  //       setMessage(data.message);
  //       setStudent(data.student);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };
  //   getInfo();
  // }, [setMessage, setStudent]);
  return (
    <div className="h-[70px] sticky top-0 left-0 z-50 md:h-[80px] main_bg_color border-b-[1px] border-b-[#1c95a7]">
      <div className="w-[93%] md:w-[90%]  m-auto flex items-center justify-between h-full">
        <div className="h-full flex items-center relative justify-center gap-6">
          <Image
            src="/tew-logo.png"
            alt="main-logo"
            width={100}
            height={200}
            className="h-[65%] md:h-[60%] main_logo"
            onClick={() => router.push("/", { scroll: false })}
          />
          <span className="text-[0.7rem] font-bold  italic absolute bottom-[5px] m:bottom-[10px] w-[200px] left-[40px]">
            The earn way academy
          </span>
        </div>
        <ul className="sm:flex font-bold items-center gap-6 text-[0.9rem] hidden ml-4">
          <Link href={"/"}>
            <li className="">Home</li>
          </Link>

          <Link href={"#footer"}>
            <li className="">Branch Login</li>
          </Link>
          <Link href={"#footer"}>
            <li className="">Contact Us</li>
          </Link>
        </ul>
        {/* ham buger  */}
        <Drawer>
          <DrawerTrigger
            className="sm:hidden  rounded-full text-[#ffad32] translate-x-1 p-2 "
            style={{ filter: "drop-shadow(1px 1px 1px black)" }}
          >
            <RxHamburgerMenu className=" text-[1.7rem]" />
          </DrawerTrigger>
          <DrawerContent className="main_bg_color outline-none border-none rounded-[0]">
            <DrawerHeader>
              <DrawerTitle>The earn way cademy</DrawerTitle>
            </DrawerHeader>

            <div className="flex items-center flex-col gap-2 p-[20px]">
              <DrawerClose>
                <Button
                  className="icon_bg rounded-[50px] "
                  onClick={() => router.push("/branch-login")}
                >
                  Branch Login
                </Button>
              </DrawerClose>
              <DrawerClose>
                <Button
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: "smooth",
                      });
                    }, 2000);
                  }}
                  className=" rounded-[50px] "
                >
                  Contact Us
                </Button>
              </DrawerClose>
            </div>

            <DrawerFooter>
              <DrawerClose>
                <Button className="w-full rounded-[50px] text-[#1b1b1b]">
                  <FaChevronDown className="text-[1.3rem]" />
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* ham icon  */}
        <div className=" items-center justify-center hidden sm:flex">
          <ul className="md:flex items-center justify-center gap-3 mr-2 hidden">
            <Link
              href={"https://www.facebook.com/the.earn.way?mibextid=ZbWKwL"}
              target="_blank"
            >
              <li className="icon_bg cursor-pointer  rounded-full p-2 icon_color">
                <TbBrandFacebook />
              </li>
            </Link>
            <Link
              href={"https://www.youtube.com/@TheEarnWayAcademy"}
              target="_blank"
            >
              <li className="icon_bg cursor-pointer rounded-full p-2 icon_color">
                <TbBrandYoutube />
              </li>
            </Link>
            <Link
              href={
                "https://www.tiktok.com/@the.earn.way.acad?_t=8i0ujqgKcRV&_r=1"
              }
              target="_blank"
            >
              <li className="icon_bg cursor-pointer rounded-full p-2 icon_color">
                <RiTiktokLine />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
