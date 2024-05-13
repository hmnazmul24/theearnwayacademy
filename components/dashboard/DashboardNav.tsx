import Image from "next/image";
import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { MdOutlineLogout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const DashboardNav = ({
  close,
  desktopNavOpen,
}: {
  close: () => void;
  desktopNavOpen: boolean;
}) => {
  return (
    <>
      <div className="h-[70px] text-[#ff8d1b] lg:hidden w-full bg-[#ffffff] drop-shadow-md flex items-center justify-between  ">
        <div className="h-full mx-3 flex items-center relative justify-center gap-6">
          <Image
            src="/tew-logo.png"
            alt="main-logo"
            width={100}
            height={200}
            className="h-[64%] md:h-[62%] main_logo"
          />
          <span
            style={{ textShadow: "1px 1px black" }}
            className="text-[0.7rem] font-bold italic absolute bottom-[5px] m:bottom-[10px] w-[200px] text-[#fac54a] underline-offset-1 shadow-sm  left-[44px]"
          >
            The earn way academy
          </span>
        </div>
        <div className="mx-3 cursor-pointer" onClick={() => close()}>
          <RiMenu3Line className="text-[1.5rem] font-bold" />
        </div>
      </div>
      {/* desktop nav  */}
      <div
        className={`w-full lg:flex items-center justify-between bg-[white] sticky top-0 right-0 drop-shadow-md h-[70px] hidden ${
          desktopNavOpen ? "pl-[50px]" : "pl-[250px]"
        }`}
      >
        <form
          className="flex_center ml-6 gap-1"
          onSubmit={(e) => e.preventDefault()}
        >
          <CiSearch className="text-[1.3rem]" />
          <input
            type="text"
            className="border-none text-[1.1rem]  min-w-[200px] outline-none border-b bg-transparent"
            name=""
            placeholder="Search here....."
            id=""
          />
        </form>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-sm px-3 py-2 mx-6 ">
              <CgProfile className="text-[1.5rem] text-[#f8a53f]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white mr-3">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href={"/branch/mybranch/profile"}
                  className="flex items-center justify-start gap-1"
                >
                  <CgProfile />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex cursor-pointer items-center justify-start gap-1 text-[red]">
                  <MdOutlineLogout />
                  Logout
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
