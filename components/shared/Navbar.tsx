"use client";

import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { TbBrandFacebook } from "react-icons/tb";
import { TbBrandYoutube } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiTiktokLine } from "react-icons/ri";
import { AiOutlineLogin } from "react-icons/ai";
import { FaChevronDown, FaMicrophoneLines, FaPhone } from "react-icons/fa6";
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
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="h-[75px]  sticky top-0 left-0 z-50 md:h-[80px] main_bg_color bg-[#1b5185] border-b-[1px] border-b-[#115560]">
      <div className="w-[96%] md:w-[90%]  m-auto flex items-center justify-between h-full">
        <div className="h-full flex items-center relative justify-center gap-6">
          <Image
            src="/tew-logo.png"
            alt="main-logo"
            width={100}
            height={200}
            className="h-[64%] md:h-[62%] main_logo"
            onClick={() => router.push("/", { scroll: false })}
          />
          <span
            style={{ textShadow: "1px 1px black" }}
            className="text-[0.7rem] font-bold italic absolute bottom-[5px] m:bottom-[10px] w-[200px] text-[#fac54a] underline-offset-1 shadow-sm  left-[44px]"
          >
            The earn way academy
          </span>
        </div>
        <ul className="sm:flex font-bold items-center gap-6 text-[0.9rem] hidden ml-4">
          <Link href={"/"}>
            <li
              className="hover:text-[#efefef]  transition-all"
              style={{ textShadow: "1px 1px 6px aqua" }}
            >
              Home
            </li>
          </Link>

          {/* <Link href={"/branch-login"}>
            <li
              className="hover:text-[#dedede] transition-all"
              style={{ textShadow: "1px 1px 6px aqua" }}
            >
              Branch Login
            </li>
          </Link> */}
          <Link href={"#footer"}>
            <li
              className="hover:text-[#dcdcdc] transition-all"
              style={{ textShadow: "1px 1px 6px aqua" }}
            >
              Contact Us
            </li>
          </Link>
        </ul>
        <div className="flex_center gap-3">
          <div className="flex_center">
            <button
              className="h-[40px] flex_center w-[40px] rounded-full bg-[#00365a] md:bg-transparent"
              onClick={() => window.open("tel:01880110842", "_self")}
            >
              <FaPhone className="text-[#ffa515] " />
            </button>
            <span className="font-bold hidden md:block text-[#dddddd] tracking-[0.5px]">
              01880110842
            </span>
          </div>
          {/* ham buger  */}
          <Drawer>
            <DrawerTrigger className="sm:hidden  h-[40px]  w-[40px] rounded-full bg-[#00365a] p-2 ">
              <RxHamburgerMenu className=" text-[1.4rem] text-[#ffa81c]" />
            </DrawerTrigger>
            <DrawerContent className="main_bg_color outline-none border-none rounded-[0]">
              <DrawerHeader>
                <DrawerTitle>The earn way cademy</DrawerTitle>
              </DrawerHeader>

              <div className="flex items-center flex-col gap-2 p-[20px]">
                <DrawerClose>
                  {/* <Button
                    className="bg-[#000000] text-[white] rounded-[50px] "
                    onClick={() => router.push("/branch-login")}
                  >
                    Branch Login
                  </Button> */}
                  {/* this is working */}
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
