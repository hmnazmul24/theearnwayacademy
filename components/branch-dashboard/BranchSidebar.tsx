import Image from "next/image";
import React, { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import BranchNavLists from "./BranchNavLists";
import { RiMenu3Line } from "react-icons/ri";

const BranchSidebar = ({
  open,
  desktopNavOpen,
  DeskTopNavClose,
}: {
  open: boolean;
  desktopNavOpen: boolean;
  DeskTopNavClose: () => void;
}) => {
  const [itemsOpen, setItemsOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <div
        className={`w-[250px] lg:hidden text-[#c1c1c1] transition-all min-h-screen bg-[#0f1f3e] fixed top-0 left-0 ${
          open ? "translate-x-0" : "translate-x-[-250px]"
        }`}
      >
        <div className="h-[70px]  bg-[#2354b6] flex items-center justify-start ">
          <div
            className={`h-full  mx-2 flex items-center relative justify-center gap-6`}
          >
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
        </div>

        <BranchNavLists
          open={itemsOpen}
          setOpen={setItemsOpen}
          desktopNavOpen={desktopNavOpen}
          DeskTopNavClose={DeskTopNavClose}
        />
      </div>
      {/* desktop nav  */}
      <div
        style={{ color: "#dadada" }}
        className={`w-[250px] hidden lg:block transition-all min-h-screen bg-[#0f1f3e] fixed top-0 left-0 ${
          desktopNavOpen && "w-[50px]"
        } `}
      >
        <div className="h-[70px] bg-[#2354b6]  flex items-center justify-between ">
          <div
            className={`h-full  mx-2 flex items-center relative justify-center gap-6 ${
              desktopNavOpen && "hidden"
            }`}
          >
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
          <div
            className="mx-3 cursor-pointer"
            onClick={() => {
              setItemsOpen(false);
              DeskTopNavClose();
            }}
          >
            <RiMenu3Line className="text-[1.5rem] text-[#eda63b]" />
          </div>
        </div>
        <BranchNavLists
          open={itemsOpen}
          setOpen={setItemsOpen}
          desktopNavOpen={desktopNavOpen}
          DeskTopNavClose={DeskTopNavClose}
        />
      </div>
    </Fragment>
  );
};

export default BranchSidebar;
