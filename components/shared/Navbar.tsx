"use client";

import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { TbBrandFacebook } from "react-icons/tb";
import { TbBrandYoutube } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiTiktokLine } from "react-icons/ri";
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
import { useThemeContext } from "@/context/theme";
import { StudentInfoType } from "@/types";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { setStudent, setMessage } = useThemeContext();
  useEffect(() => {
    let getInfo = async () => {
      try {
        let { data } = await axios.get("/api/student");
        console.log(data);
        setMessage(data.message);
        setStudent(data.student);
      } catch (error) {
        console.log("error", error);
      }
    };
    getInfo();
  }, []);
  return (
    <div className="h-[70px] sticky top-0 left-0 z-50 md:h-[80px] bg-white border-b-[1px] border-b-slate-200">
      <div className="w-[93%] md:w-[90%]  m-auto flex items-center justify-between h-full">
        <div className="h-full flex items-center relative justify-center gap-6">
          <img
            src={"/tew.png"}
            alt="main-logo"
            className="h-[40%] md:h-[42%]"
            onClick={() => router.push("/", { scroll: false })}
          />
          <span className="text-[0.8rem] absolute bottom-[3px] w-[200px] left-[3px]">
            The earn way academy
          </span>
          <ul className="sm:flex items-center gap-4 text-[0.9rem] hidden ml-4">
            <li className="main_color">Home</li>
            <li className="main_color">About</li>
            <li className="main_color">Contact Us</li>
          </ul>
        </div>
        {/* ham buger  */}
        <Drawer>
          <DrawerTrigger className="sm:hidden bg-slate-200 rounded-full main_color mr-2 p-2">
            <RxHamburgerMenu className="m-[6px] text-[1.2rem]" />
          </DrawerTrigger>
          <DrawerContent className="bg-[white] rounded-[0]">
            <DrawerHeader>
              <DrawerTitle>The earn way cademy</DrawerTitle>
            </DrawerHeader>

            {/* <div className="flex items-center flex-col gap-2 p-[20px]">
              <Button
                className="main_color rounded-[50px] "
                variant={"outline"}
              >
                sign in
              </Button>
              <Button className="bg-slate-200 rounded-[50px] main_color">
                register
              </Button>
            </div> */}
            <div className="flex items-center flex-col gap-2 p-[20px]">
              <Button
                className="main_color rounded-[50px] "
                variant={"outline"}
              >
                About Us
              </Button>
              <Button className="bg-slate-200 rounded-[50px] main_color">
                Contact Us
              </Button>
            </div>

            <DrawerFooter>
              <DrawerClose>
                <Button className="w-full rounded-[50px] text-[tomato]">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        {/* ham icon  */}
        <div className=" items-center justify-center hidden sm:flex">
          <ul className="md:flex items-center justify-center gap-3 mr-8 hidden">
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
          {/* <Button className="main_color">sign in</Button>
          <Button className="bg-slate-200 rounded-[50px] main_color">
            register
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
