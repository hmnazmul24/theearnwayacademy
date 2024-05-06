"use client";

import BranchInfo from "@/components/branch-apply/BranchInfo";
import Document from "@/components/branch-apply/Document";
import MoreInfo from "@/components/branch-apply/MoreInfo";
import PersonalInfo from "@/components/branch-apply/PersonalInfo";
import { Button } from "@/components/ui/button";
import { useThemeContext } from "@/context/theme";
import React from "react";

const BranchApply = () => {
  const { personal, branch, moreBranchInfo, branchDocument } =
    useThemeContext();
  const handleSubmit = () => {
    let ApplicantInfo = { personal, branch, moreBranchInfo, branchDocument };
    console.log("applicant", ApplicantInfo);
  };
  return (
    <div className="min-h-screen md:rounded-md w-full my-2 m-auto bg-white md:w-[90%]">
      <h1 className="text-center p-4 md:my-3 text-[1.2rem] font-bold text-[#29809d]">
        Branch Apply
      </h1>
      <div className="w-full pb-11">
        <div className="flex items-center flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/2 p-3 m-2 branchInfoGredientBg min-h-[200px] rounded-md">
            <PersonalInfo />
          </div>
          <div className="w-full md:w-1/2 p-3 m-2 branchInfoGredientBg min-h-[200px] rounded-md">
            <BranchInfo />
          </div>
        </div>
        <div className="flex items-start flex-col md:flex-row justify-start">
          <div className="w-full md:w-1/2 p-3 m-2 branchInfoGredientBg min-h-[200px] rounded-md">
            <MoreInfo />
          </div>
          <div className="w-full md:w-1/2 p-3 m-2 branchInfoGredientBg min-h-[200px] rounded-md">
            <Document />
          </div>
        </div>
        <div className="flex justify-end p-5">
          <Button
            className="p-3 bg-[#1a7183] text-white"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BranchApply;
