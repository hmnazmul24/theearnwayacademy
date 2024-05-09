"use client";
import React from "react";
import BranchInput from "./BranchInput";
import { useThemeContext } from "@/context/theme";
import BranchSelectInput from "./BranchSelectInput";
import { BDDistric } from "@/lib/arrayInfo/bd_state_info";
import Divition from "./Divition";

const MoreInfo = () => {
  const { ChangeMoreBranchInfo, moreBranchInfo } = useThemeContext();

  return (
    <div className="w-full">
      {" "}
      <h1 className="branch_heading">Additional Information</h1>
      <div className="flex flex-col gap-1">
        <BranchInput
          ChangeInfo={ChangeMoreBranchInfo}
          name="name"
          placeholder="Contact Name"
        />
        <BranchInput
          ChangeInfo={ChangeMoreBranchInfo}
          name="mobile"
          placeholder="Additional Mobile Number"
        />
        <h1 className="m-2 font-bold text-[0.8rem] ">
          *** Select division, then district, then upazila.
        </h1>
        <Divition />
        <BranchSelectInput name="district" />
        <BranchSelectInput name="upozila" />
        <BranchInput
          ChangeInfo={ChangeMoreBranchInfo}
          name="address"
          placeholder="Address"
        />
        <BranchInput
          ChangeInfo={ChangeMoreBranchInfo}
          name="postcode"
          placeholder="Post Code"
        />
      </div>
    </div>
  );
};

export default MoreInfo;
