import { DashboarNavItemsArr, branchNavItemsArr } from "@/lib/arrayInfo/branch";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { IoCashOutline } from "react-icons/io5";
import { PiGitBranchBold } from "react-icons/pi";
import { CiBank } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import { RiBankFill } from "react-icons/ri";
import { RiBubbleChartFill } from "react-icons/ri";

import { FaAngleRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";
const DashboardLists = ({
  desktopNavOpen,
  DeskTopNavClose,
  open,
  setOpen,
}: {
  desktopNavOpen: boolean;
  DeskTopNavClose: () => void;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [selectItem, setSelectItem] = useState<string>("Dashboard");

  const clickHandler = (arg: string) => {
    if (arg === selectItem) {
      setOpen(!open);
      setSelectItem(arg);
    } else {
      setOpen(true);
      setSelectItem(arg);
    }
  };
  const icons = [
    <MdDashboardCustomize />,
    <IoPeopleSharp />,
    <PiGitBranchBold />,
    <RiBubbleChartFill />,
  ];

  const pathname = usePathname();
  return (
    <div className="pt-2">
      {DashboarNavItemsArr.map((item, i) => (
        <div key={item.title} className="min-w-[250px]">
          <h1
            className={`flex px-4 py-3 ${
              item.title === selectItem && "text-[#3ce2ff]"
            } items-center  justify-between`}
            onClick={() =>
              !desktopNavOpen ? clickHandler(item.title) : DeskTopNavClose()
            }
          >
            <span className="flex_center gap-1">
              {icons[i]}{" "}
              <div className={`${desktopNavOpen && "hidden"}`}>
                {item.title}
              </div>
            </span>
            <span
              className={`transition-all ${
                open && item.title === selectItem && "rotate-90"
              } ${desktopNavOpen && "hidden"}`}
            >
              <FaAngleRight />
            </span>
          </h1>
          <ul
            className={`bg-[#0b1630] transition-all   overflow-hidden ${
              open && selectItem === item.title ? item.h : "h-[0px]"
            }`}
          >
            {item.items.map((info) => (
              <Link href={info.link} key={info.title}>
                <li
                  key={info.link}
                  className="py-[13px] border-b-[#0b3245] border-b-[1px]"
                >
                  <span
                    className={`px-4 flex_center justify-start ml-3 gap-1 ${
                      info.link === pathname && "text-[#4de4ff]"
                    }`}
                  >
                    <FaAngleRight /> <span>{info.title}</span>
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DashboardLists;
