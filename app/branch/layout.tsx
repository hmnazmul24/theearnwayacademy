"use client";

import BranchNavbar from "@/components/branch-dashboard/BranchNavbar";

import { useEffect, useState } from "react";
import BranchSidebar from "@/components/branch-dashboard/BranchSidebar";

export default function BranchDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState<boolean>(false);
  const [desktopNavOpen, setDesktopNavOpen] = useState<boolean>(false);
  const close = () => {
    setOpen(!open);
  };
  const DeskTopNavClose = () => {
    setDesktopNavOpen(!desktopNavOpen);
  };
  return (
    <div className="bg-slate-100 min-h-screen">
      <BranchNavbar close={close} desktopNavOpen={desktopNavOpen} />

      <BranchSidebar
        open={open}
        desktopNavOpen={desktopNavOpen}
        DeskTopNavClose={DeskTopNavClose}
      />
      <div className={`${desktopNavOpen ? "lg:pl-[50px]" : "lg:pl-[250px]"} `}>
        {children}
      </div>
    </div>
  );
}
